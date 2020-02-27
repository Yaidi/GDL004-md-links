const fs = require('fs');
const validateFile = (pathFile) => {
    return new Promise((resolve, reject) => {
        fs.stat(pathFile, (err, file) => {
            if (err) {
                reject(err);
            } else {
                resolve(file);
            }
        });
    });
}

function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile(pathFile, 'utf-8', (err, file) => {
            if (err) {
                return console.log(errRead)
            }
            return file
        })
    });
};

module.exports = {
    validateFile: validateFile,
    readFile: readFile
}