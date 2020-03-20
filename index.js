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
    } else if (fileF.validatePath(pathFile)) {
        fileF.dirFiles(pathFile)
            .then((arrayFiles) => {
                return arrayFiles
            }).catch((err) => {
                console.error(err);
            })
    }
    console.log(pathF.mdFile(pathFile) == err.errMd)
    if (pathF.mdFile(pathFile))
        fileF.readFile(pathFile)
        .then((res) => {
            return objLinks(res, pathFile)
        }).then((objLinks) => {
            let choose = options(option);

            if (choose.stats && choose.validate) {
                linksF.http(objLinks)
                    .then((res) => {
                        let counter = linksF.counters(res);
                        f.statsValidate(counter)
                    })
            } else if (choose.stats) {
                let counter = linksF.counters(objLinks);
                f.statsValidate(counter)
            } else if (choose.validate) {
                linksF.http(objLinks)
                    .then((res) => {
                        f.validate(res);
                    })
            } else if (option == '-v') {
                console.log('Version 1.0.0')
            } else if (option == '-h' || option == 'help') {
                console.log(help);
            } else if (option == '') {
                f.defect(objLinks)
            } else {
                console.error(err.errCommand);
            }
        }).catch((err) => {
            console.error(err)
        })
}