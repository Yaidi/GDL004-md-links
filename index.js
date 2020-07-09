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
        return Promise.reject(errPath);
    }
    return new Promise((resolve, reject) => {
        directory(pathFile, validatePath(pathFile))
        .then((paths) => {
            paths.forEach(async(path) => {
                let md = await mdFile(path, paths);
                if (md == errMd || md == errMdFiles) {
                    return reject(md)
                }
                if (paths.length > 1) {
                    path = pathFile + '/' + path;
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
                                    resolve(statsValidate(counter, paths)) 
                                })
                        } else if (choose.stats) {
                            let counter = counters(objLinks);
                            resolve(stats(counter, paths))

                        } else if (choose.validate) {
                            http(objLinks)
                                .then((res) => {
                                    resolve(validate(res))
                                })
                        }else if (option == '') {
                            resolve(defect(objLinks));
                        } 
                        else if (option == '-v') {
                            resolve('Version 2.2.6')
                        } else if (option == '-h' || option == 'help') {
                            resolve(help);
                        } else if (option == '-a' || option == 'author') {
                            resolve('Yaidi Garcia');
                        } else if (option == '-repo' || option == 'repository') {
                             resolve(repository);
                        }
                         else {
                            reject(errCommand);
                        }
                    })
            })
        }).catch((err) => reject(err))
    })
}