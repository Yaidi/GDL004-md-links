const process = require('process');
const mdLinks = require('./index.js')
let pathFile = process.argv[2];
let option = process.argv.slice(3, process.argv.length);

mdLinks(pathFile, option)