const fetch = require('node-fetch');
const { errL } = require('./message.js');
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
                //para contar
                failCounter++
            });
    }
}
const links = (content) => {
    const regexLinks = /\[(.*?)\]\((.*?)\)/gm;
    let linksArray = content.match(regexLinks);
    return linksArray
}
module.exports = {
    links: links,
    http: responseHttp,
}