const { validatePath, dirFiles, readFile } = require('./file.js');
const { mdFile } = require('./path.js');
const { counters, http } = require('./links.js');
const { statsValidate, stats, validate, defect } = require('./show.js');
const { help, repository, errMd, errMdFiles, errCommand, errPath } = require('./message.js');
const options = require('./option.js');
const objLinks = require('./obj.js');
const directory = require('./directory.js');

function mdLinks(pathFile, option) {
    if (pathFile == undefined) {
        return console.log(errPath);
    }

    directory(pathFile, validatePath(pathFile))
        .then((path) => {
            path.forEach(async(path) => {
                let md = await mdFile(path);
                if (md == errMd || md == errMdFiles) {
                    console.log(md, 'entré aquí');
                    return md
                }
                readFile(path)
                    .then((res) => {
                        console.log('leer');
                        return objLinks(res, pathFile)
                    }).then((objLinks) => {
                        let choose = options(option);

                        if (choose.stats && choose.validate) {
                            http(objLinks)
                                .then((res) => {
                                    let counter = counters(res);
                                    statsValidate(counter)
                                })
                        } else if (choose.stats) {
                            let counter = counters(objLinks);
                            stats(counter)
                        } else if (choose.validate) {
                            http(objLinks)
                                .then((res) => {
                                    validate(res);
                                })
                        } else if (option == '-v') {
                            console.log('Version 1.0.0')
                        } else if (option == '-h' || option == 'help') {
                            console.log(help);
                        } else if (option == '') {
                            defect(objLinks)
                        } else if (option == '-a' || option == 'author') {
                            console.log('Yaidi Garcia');
                        } else if (option == '-repo' || option == 'repository') {
                            console.log(repository);
                        } else {
                            console.error(errCommand);
                            console.log(help);
                        }
                    }).catch((err) => {
                        console.error(err)
                    })
            })
        })

}
module.exports = mdLinks;