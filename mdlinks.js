const m = require('./message.js');
const f = require('./file');
module.exports = mdLinks = (path, option) => {
    return new Promise((resolve, reject) => {
        if (!path) {
            reject(console.log(m.errVal));
        }
        f.validateFile(pathFile)
            .then((res) => {
                console.log(res);
                console.log('hola');
            })
            .catch((err) => {
                console.log(err)
            })
            // revisar, validate True or False
    });
}