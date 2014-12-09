silabak.js
==========

Euskarazko testuen silabak zenbatzen dituen erreminta

Metodoa
-------

Silabak zenbatzeko metodoa ondorengo lanetik aterata dago:
###### EUSKAL TESTUETAKO SILABA EGITUREN MAIZTASUNA DIAKRONIKOKI 1, 2 Oroitz Jauregi (EHU/UPV)
PDF: http://www.ehu.es/ojs/index.php/ASJU/article/viewFile/8865/8021

Mila esker egileari!



Martxan jarri
-------------

### Instalatu
`npm install silabak.js`

### Erabili
```js  
var S = require('silabakjs')
var silabak = S('aztertu testu hau, mesedez')
```
`silabak` objektua hauxe izango litzateke kasu hontan:
```js

  { 
    testua: {
     gordina: 'Aztertu testu hau, mesedez.',
     garbia: 'aztertu testu hau mesedez',
     serializatua: 'VC1CVC1CV2# CVC1CV2# CV2# CV2CV2CVC1#' 
    },
    silabak: { 
      kantitatea: 9, 
      itxiak: 4, 
      irekiak: 5 
    } 
  }
```
  
