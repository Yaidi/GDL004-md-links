const process = require('process');
const mdLinks = require('./index.js');
const pathFile = process.argv[2];
const option = process.argv.slice(3, process.argv.length).join(' ');

mdLinks(pathFile, option)