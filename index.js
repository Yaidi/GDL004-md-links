const fileF = require('./file.js');
const pathF = require('./path.js');
const linksF = require('./links.js');
module.exports = mdLinks = (pathFile, option) => {
    pathF.mdFile(pathFile)
        .then((res) => {
            return fileF.readFile(res)
        })
        .then((res) => {
            let links = linksF.links(res);
            if (option.includes('--validate --stats')) {
                console.log('soy stats validate')
            } else if (option.includes('--stats')) {
                console.log('soy stats');
            } else if (option.includes('--validate')) {
                console.log('validate soooy');
            } else if (option.includes('')) {
                console.log('no tengo validate ni stats');
            } else {
                console.error('comando no encontrado')
            };
        }).catch((err) => {
            console.log(err)
        })

}