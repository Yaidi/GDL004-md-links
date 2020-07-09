const process = require('process');
const mdLinks = require('./index.js');
const { red } = require('chalk');

const pathFile = process.argv[2];
const option = process.argv.slice(3, process.argv.length).join(' ');

mdLinks(pathFile, option)
    .then((objLinks) =>   console.log( objLinks) )
    .catch(err => console.log(red('\n' + err)))