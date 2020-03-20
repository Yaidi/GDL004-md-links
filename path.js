const path = require('path');
const { errMd } = require('./message.js')
const mdFile = (pathFile) => {
    let ext = path.extname(pathFile)
    if (ext == '.md') {
        return pathFile
    }
    return errMd

};


module.exports = {
    mdFile: mdFile,
}