 const message = require('./message.js');
 const process = require('process');
 const fileF = require('./file.js');
 const pathF = require('./path.js');
 const linksF = require('./links');
 const options = require('./option.js');
 let pathFile = process.argv[2];
 let option = process.argv.slice(3, process.argv.length)
 const mdLinks = () => {
     return new Promise((resolve, reject) => {
         if (err) {
             reject(err)
         } else {
             resolve(pathFile)
         }

     });
 }
 mdLinks()

 mdLinks
     .then((pathFile) => {
         validateFile(pathFile);
         options.optionChoose(option)
     })
     .catch((err) => {
         console.log(message.errFile);
     })
 fileF.validateFile
     .then((file) => {
         pathF.mdFile(file)
     }).catch((err) => {
         console.log(message.errMd);
     })
 pathF.mdFile
     .then((md) => {
         fileF.readFile(md)
     })
     .catch((err) => {
         console.log(message.errRead);
     });
 fileF.readFile
     .then((content) => {
         linksF.links(content)
     })
     .catch((err) => {
         console.log(message.errL)
     });

 linksF.links
     .then((linksArray) => {

     })
     .catch((err) => {

     })