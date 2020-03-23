const path = require('path');
const { errMd, errMdFiles } = require('./message.js')
const mdFile = (pathFile) => {
    let ext = path.extname(pathFile);
    if (ext == '.md') {
        return pathFile
    } else {
        if (i == 1) {
            return errMd
        } else {
            return errMdFiles
        }

    }

};

module.exports = {
    mdFile: mdFile,
}