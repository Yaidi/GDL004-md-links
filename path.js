const path = require('path');
const mdFile = () => {
    return new Promise((resolve, reject) => {
        if (err) {
            // Se imprime el error
            reject(console.log(err))
        }
        let ext = path.extname(pathFile)
        if (ext == '.md') {
            resolve(pathFile)
        }

    })
};

module.exports = {
    mdFile: mdFile,
}