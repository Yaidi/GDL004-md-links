const fileF = require('./file.js');
const pathF = require('./path.js');
const linksF = require('./links.js');
module.exports = mdLinks = (pathFile, option) => {
        pathF.mdFile(pathFile)
            .then((res) => {
                return fileF.readFile(res)
            })
            .then((res) => {
                    console.log(option.includes(('s' && 'v') || ('stats' && 'validate') || 'validate stats' || 'v' && 's'));
                    let links = linksF.links(res)
                    if (option.includes(('s v' || 'stats validate' || 'validate stats' || 'v s')) {
                            console.log('solo mostrar link')
                        } else if (option.includes('stats' || 's')) {
                            console.log('stats soooy');
                        } else if (option.includes('validate' || 'v')) {
                            console.log('validate soooy');

                        } else if (option.includes('')) {
                            console.log('no tengo validate ni stats');
                        };
                    }).catch((err) => {
                    console.log(err)
                })

            }