const validate = (objLinks) => {
    objLinks.forEach(link => {
        console.log(link.path, link.link, link.statusText, link.text)
    });
}
const stats = (counter) => {
    console.log('Total: ' + counter.Total, 'Unique: ' + counter.Unique);
}
const statsValidate = (counter) => {
    console.log('Total: ' + counter.Total, 'Unique: ' + counter.Unique, 'Broken: ' + counter.Broken)

}
const defect = (objLinks) => {
    objLinks.forEach(link => {
        console.log(link.path, link.link, link.text)
    });
}
module.exports = {
    validate,
    stats,
    statsValidate,
    defect,
}