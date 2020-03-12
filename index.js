const fileF = require('./file.js');
const pathF = require('./path.js');
const linksF = require('./links.js');
const links = require('./obj.js');
module.exports = mdLinks = (pathFile, option) => {
    pathF.mdFile(pathFile)
        .then((res) => {
            return fileF.readFile(res)
        })
        .then((res) => {
            return links(res)
        }).then((obj) => {

            if (option.includes('--validate --stats')) {
                linksF.http(obj);

            } else if (option.includes('--stats')) {
                console.log('soy stats');

            } else if (option.includes('--validate')) {
                linksF.http(obj);

            } else if (option.includes('1')) {
                console.log('aaa');

            } else {
                console.error('comando no encontrado')
            };
        }).catch((err) => {
            console.log(err)
        })

}