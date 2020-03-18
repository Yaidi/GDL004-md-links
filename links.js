const fetch = require('node-fetch');

const counters = (links) => {
    let okCounter = 0;
    let failCounter = 0;
    let uniqueCounter = 0;
}
const responseHttp = (array) => {
    let arrayPromises = array.map(async(obj) => {
        let response;
        try {
            response = await fetch(obj.link);
            response = {
                ...obj,
                statusText: 'OK',
            }
        } catch (error) {
            response = {
                ...obj,
                statusText: 'FAIL',

            }
        }
        return response

    });
    return Promise.all(arrayPromises)

}
module.exports = {
    http: responseHttp,
    counters: counters,
}