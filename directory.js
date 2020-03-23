const { dirFiles } = require('./file.js');

module.exports = (pathFile, boleano) => {
    return new Promise((resolve, reject) => {
        if (boleano) {
            dirFiles(pathFile)
                .then((pathFile) => {
                    resolve(pathFile)
                })
        } else if (!boleano) {
            Promise.resolve([pathFile])
        } else {
            reject();
        }

    });


}