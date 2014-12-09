/* 
Silabak.js
NodeJS-erako euskarazko testuen silaba zenbatzailea.
by @jimakker | https://github.com/jimakker/silabak.js

Metodoa ondorengo lanetik aterata dago:
"EUSKAL TESTUETAKO SILABA EGITUREN MAIZTASUNA DIAKRONIKOKI 1, 2 Oroitz Jauregi (EHU/UPV)" 
http://www.ehu.es/ojs/index.php/ASJU/article/viewFile/8865/8021 
*/


// EKIN BEREZIAK (W)
// 		MUTA CUM LIQUIDA eta frikari ezpainhorzkari ahoskabea gehi urkari bilkura
var W = /[ptkbdg][rl]|f[rl]/gi


// BOKALAK (V)
var BOKALAK = /[aeiou]/gi
//		DIPTONGOAK
var DIPTONGOAK = /ei|eu|ai|au|oi|ui/gi
//		Hitz hasierako ia,ie,io,iu bilkurak
var HITZHASERA = /\bi(?=[aeou])/gi


// KONTSONANTEAK (C)
var KONTSONANTEAK = /[bdfghjklmnñprstxz]/gi	
//		HASPERENA
var HASPERENA = /[ptknlr]h/gi	
//		AFRIKATUAK
var AFRIKATUAK = /t[sxz]/gi	
//		DARDARKARIAK
var DARDARKARIAK = /rr/gi
//		TT, DD, LL 
var TTDDLL =/tt|dd|ll/gi


// SILABA MUGAK
// 		AMAIERAN V
var AMAIERAV = /V\b/g
//		AMAIERAN C
var AMAIERAC = /C\b/g
// 		HIRU KONTSONANTE CCC
var CCC = /CCC/g
//		VW
var	VW	= /VW/g
//		CW
var	CW	= /CW/g
//		BI BOKAL (hiatoa)
var VV = /VV/g
//		VCCV Bokal artean bi kontsonante
var VCCV = /VCCV/g
//		VCV Bokal artean kontsonante bakarra
var VCV = /VCV/g

module.exports = function(testua){

	this.zenbatu = function(testuSerializatua){
		return {
			kantitatea: testuSerializatua.replace(/[^0-9]/g,"").length,
			itxiak: testuSerializatua.replace(/[^1]/g,"").length,
			irekiak: testuSerializatua.replace(/[^2]/g,"").length
		}
	},

	this.garbitu = function(testua){
		return testua.replace(/(\/|;|\.|!|,|:|«|»|–|\?|\(|\)|\n|\r|[1234567890])/g,'').toLowerCase()
	},

	this.serializatu = function(testuGarbia){
		return testuGarbia
		// ORDEZTU
		.replace(W,'W')
		.replace(HITZHASERA,'C')
		.replace(DIPTONGOAK,'V')
		.replace(HASPERENA,'C')
		.replace(AFRIKATUAK,'C')
		.replace(DARDARKARIAK,'C')
		.replace(TTDDLL,'C')
		.replace(BOKALAK,'V')
		.replace(KONTSONANTEAK,'C')
		// MUGATU
		.replace(AMAIERAV,'V2#')
		.replace(AMAIERAC,'C1#')
		.replace(CCC,'CC1C')
		.replace(VW, 'V2W')
		.replace(CW, 'C1W')
		.replace(VV,'V2V')
		.replace(VCCV,'VC1CV')
		.replace(VCCV,'VC1CV') // bikoiztu... (errekurtsiboa izan behar luke berez)
		.replace(VCV,'V2CV')
		.replace(VCV,'V2CV') // bikoiztu... (errekurtsiboa izan behar luke berez)
	}

	var self = {}
	self.testua = {}
	self.testua.gordina = testua
	self.testua.garbia = this.garbitu(testua)
	self.testua.serializatua = this.serializatu(self.testua.garbia)
	self.silabak = this.zenbatu(self.testua.serializatua)

	return self
}