const fileF = require('./file.js');
const pathF = require('./path.js');
const linksF = require('./links.js');
module.exports = mdLinks = (pathFile, option) => {
    pathF.mdFile(pathFile)
        .then((res) => {
            return fileF.readFile(res)
        })
        .then((res) => {
            let links = linksF.links(res)
            if (option.includes(statsValidate)) {

            } else if (option.includes('stats' | 's')) {

            } else if (option.includes('validate' | 'v')) {

            } else if (option.includes('s v' | 'stats validate')) {

            }
        }).catch((err) => {
            console.log(err)
        })

}