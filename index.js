const fileF = require('./file.js');
const pathF = require('./path.js');
const linksF = require('./links.js');
const options = require('./option.js');
const links = require('./obj.js');
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
            return links(res)
        }).then((array) => {
            let choose = options(option);

            if (choose.stats && choose.validate) {
                linksF.http(array);
            } else if (choose.stats) {

            } else if (choose.validate) {
                linksF.http(array)
                    .then((res) => {
                        console.log(res);

                    })
                    .catch((err) => {
                        console.error(err);
                    })
            } else if (option == '-v') {
                console.log('Version 1.0')
            } else if (option == '-h' || option == 'help') {
                console.log(help);
            } else if (option == undefined) {
                console.log('no hay ni validate ni stats');
            } else {
                console.log('comando no encontrado');
            }
        }).catch((err) => {
            console.error(err)
        })

}