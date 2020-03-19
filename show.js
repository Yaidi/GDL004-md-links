const validate = (res) => {
    res.forEach(link => {
        console.log(link.path, link.link, link.statusText, link.text)
    });
}
const stats = (res) => {
    res.forEach(link => {

    });
}
module.exports = {
    validate,
}