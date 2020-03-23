const { dirFiles } = require('./file.js');

module.exports = (pathFile, boleano) => {
    return new Promise((resolve, reject) => {
        if (boleano) {
            console.log('es un directorio');
            dirFiles(pathFile)
                .then((pathFile) => {
                    resolve(pathFile)
                })
        } else if (!boleano) {
            Promise.resolve([pathFile])
            console.log('solo un archivo');
        } else {
            Promise.reject();
        }

    });


}