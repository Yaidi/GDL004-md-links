const fetch = require('node-fetch');
const failOk = () => {

}
const val = () => {
    let okCounter = 0;
    let failCounter = 0;

}
const responseHttp = (links) => {
    //petición por medio de fetch
    for (let i = 0; i < links.length; i++) {
        fetch(links[i])
            .then(res => {
                res.text();
                //para contar
                okCounter++
            })
            .then(links => {
                console.log(links);
                //para contar
                failCounter++
            });
    }
}
const links = () => {
    const regexLinks = /\[(.*?)\]\((.*?)\)/gm;
    let linksArray = file.toString().match(regexLinks);
    return new Promise((resolve, reject) => {
        if (err) {
            reject(err)
        } else {
            resolve(console.log(linksArray))
        }
    });
}
module.exports = {
    links: links,
    http: responseHttp,
}