const path = require('path');
const { errMd } = require('./message.js')
const mdFile = (pathFile) => {
    return new Promise((resolve, reject) => {
        let ext = path.extname(pathFile)
        if (ext == '.md') {
            return resolve(pathFile)
        }
        return reject(console.log(errMd))

    })
};

module.exports = {
    mdFile: mdFile,
}