const fileF = require('./file.js');
const pathF = require('./path.js');
const linksF = require('./links.js');
const f = require('./show.js');
const options = require('./option.js');
const objLinks = require('./obj.js');
const err = require('./message.js');
const { help } = require('./message.js');
module.exports = mdLinks = (pathFile, option) => {
    if (pathFile == undefined) {
        return console.log(err.errPath);
    }
    pathF.mdFile(pathFile)
        .then((res) => {
            return fileF.readFile(res)
        })
        .then((res) => {
            return objLinks(res, pathFile)
        }).then((array) => {
            let choose = options(option);

            if (choose.stats && choose.validate) {
                linksF.http(array)
                    .then((res) => {

                    })
            } else if (choose.stats) {

            } else if (choose.validate) {
                linksF.http(array)
                    .then((res) => {
                        f.validate(res);
                    })
            } else if (option == '-v') {
                console.log('Version 1.0.0')
            } else if (option == '-h' || option == 'help') {
                console.log(help);
            } else if (option == '') {

            } else {
                console.error(err.errCommand);
            }
        }).catch((err) => {
            console.error(err)
        })

}