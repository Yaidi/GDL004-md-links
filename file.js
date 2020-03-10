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
    fs.readFile(md, 'utf-8', (err, fileRead) => {
        return new Promise((resolve, reject) => {
            if (err) {
                return reject(errRead)
            } else {
                console.log('hola');
                return resolve(fileRead)
            }
        });

    });
};

module.exports = {
    validateFile: validateFile,
    readFile: readFile,
}