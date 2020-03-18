const fileF = require('./file.js');
const pathF = require('./path.js');
const linksF = require('./links.js');
const options = require('./option.js');
const links = require('./obj.js');
module.exports = mdLinks = (pathFile, option) => {

    pathF.mdFile(pathFile)
        .then((res) => {
            return fileF.readFile(res)
        })
        .then((res) => {
            return links(res)
        }).then((array) => {
            let choose = options(option);
            console.log(choose);

            if (choose.stats && choose.validate) {
                console.log('stats y validate');
                linksF.http(array);
            } else if (choose.stats) {
                console.log('entré stats');

            } else if (choose.validate) {
                linksF.http(array)
                    .then((res) => {
                        console.log(res);

                    })
                    .catch((err) => {
                        console.log(err);

                    })
            } else if (!choose.stats && !choose.validate) {
                console.log('no hay ni validate ni stats');

            } else {
                console.error('comando no encontrado')
            };
        }).catch((err) => {
            console.log(err)
        })

}