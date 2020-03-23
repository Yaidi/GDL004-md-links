const fetch = require('node-fetch');

module.exports = responseHttp = (array) => {
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