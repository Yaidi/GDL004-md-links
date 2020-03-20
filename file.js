const fs = require('fs');
const { errRead, errDir } = require('./message.js');

const validatePath = (pathFile) => {
    return fs.statSync(pathFile).isDirectory();
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

const dirFiles = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, 'utf-8', (err, files) => {
            if (err) { return reject(errDir) };
            return resolve(files)
        })
    });

}

module.exports = {
    validatePath,
    readFile,
    dirFiles,
}