const { errL } = require('./message.js');
module.exports = obj = (content, path) => {
    return new Promise((resolve, reject) => {
        if (!content) {
            return reject(errL);
        }
        const regexLinksAndText = /\[(.*)\]\((https?:\/\/(www\.)?)(.*)\)/gm;
        let linksArray = content.match(regexLinksAndText);
        let obj = {};
        let array = [];
        const regexText = /\[(.*?)\]/gm;
        const regexLinks = /\((https?:\/\/(www\.)?)(.*)\)/gm;

        for (let i = 0; i < linksArray.length; i++) {
            obj = {
                path: path,
                link: linksArray[i].match(regexLinks)[0].replace('(', '').replace(')', ''),
                text: linksArray[i].match(regexText)[0].replace('[', '').replace(']', ''),
            }

            array.push(obj)

        }
        return resolve(array)
    });

}