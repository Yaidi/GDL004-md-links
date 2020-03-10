const fs = require('fs');
const { errRead } = require('./message.js');
const validateFile = (pathFile) => {
    return new Promise((resolve, reject) => {
        fs.stat(pathFile, (err, file) => {
            if (err) {
                reject(err);
            } else {
                resolve(file);
            }
        });
    })
}

const readFile = (md) => {

    return new Promise((resolve, reject) => {
        fs.readFile(md, 'utf-8', (err, fileRead) => {

            if (err) {
                reject(errRead)
            } else {
                resolve(fileRead)
            }


        });
    });

};

module.exports = {
    validateFile: validateFile,
    readFile: readFile,
}