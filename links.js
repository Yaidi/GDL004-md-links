const fetch = require('node-fetch');
const { errL } = require('./message.js');
const objLinks = (linksArray) => {
    let obj = {}
    const regexText = /\[(.*?)\]/gm;
    const regexLinks = /\((.*?)\)/gm;
    for (let i = 0; i < linksArray.length; i++) {
        obj = {
            links: linksArray[i].match(regexLinks)[0].replace('(', '').replace(')', ''),
            text: linksArray[i].match(regexText)[0].replace('[', '').replace(']', ''),
        }
        responseHttp(obj)
    }
}
const counters = (links, ) => {
    let okCounter = 0;
    let failCounter = 0;
    let unique = 0;

}
const responseHttp = (obj) => {
    //petición por medio de fetch
    obj.forEach(element => {

    });
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
    const regexLinksAndText = /\[(.*?)\]\((.*?)\)/gm;

    let linksArray = content.match(regexLinksAndText);
    objLinks(linksArray)
    return linksArray

}
module.exports = {
    links: links,
    http: responseHttp,
    counters: counters,
}