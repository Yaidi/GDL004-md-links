const { red, green, yellow, blue, magenta, gray, bgRed, bgGreen } = require('chalk');

const validate = (objLinks) => {
    objLinks.forEach(link => {
        console.log(
            yellow(link.path),
            blue(link.link),
            magenta(link.text),
            link.statusText,
            link.status);
    });
}
const stats = (counter, objLinks) => {
    console.log(`
    Total: ${counter.Total}
    Unique: ${counter.Unique}`)
}
const statsValidate = (counter, objLinks) => {
    console.log(`
Total: ${counter.Total}
Unique: ${counter.Unique}
Broken:  ${counter.Broken}
Ok: ${counter.Ok}`)

}
const defect = (objLinks) => {
    objLinks.forEach(link => {
        console.log(
            link.path,
            link.link,
            link.text)
    });
}
module.exports = {
    validate,
    stats,
    statsValidate,
    defect,
}