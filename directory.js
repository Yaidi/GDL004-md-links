const { dirFiles } = require('./file.js');
const {errExist} = require('./message.js');
module.exports = (pathFile, boleano) => {
    return new Promise((resolve, reject) => {
        if(boleano == 'Exist'){
         return reject(errExist);
        }
        if (boleano) {
            dirFiles(pathFile)
                .then((pathFile) => {
                    resolve(pathFile)
                })
        } else if (!boleano) {
            resolve([pathFile])
        } 

    });


}