const { validatePath, readFile } = require('./file.js');
const { mdFile } = require('./path.js');
const { statsValidate, stats, validate, defect } = require('./show.js');
const { help, repository, errMd, errMdFiles, errCommand, errPath } = require('./message.js');
const http = require('./http.js');
const counters = require('./counters.js');
const options = require('./option.js');
const objLinks = require('./obj.js');
const directory = require('./directory.js');

module.exports = mdLinks = (pathFile, option) => {
    if (pathFile == undefined) {
        return console.log(errPath);
    }
    directory(pathFile, validatePath(pathFile))
        .then((paths) => {
            paths.forEach(async(path) => {
                let md = await mdFile(path, paths);
                if (md == errMd || md == errMdFiles) {
                    return console.log(md)
                }

                if (paths.length > 1) {
                    path = pathFile + '/' + path
                }
                readFile(path)
                    .then((res) => {
                        return objLinks(res, path)
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
                            stats(counter, objLinks)
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