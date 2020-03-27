const fetch = require('node-fetch');

module.exports = responseHttp = (array) => {
    let arrayPromises = array.map(async(obj) => {
        let response;
        try {
            response = await fetch(obj.link)
            let statusText = response.statusText;
            let status = response.status;
            response = {
                ...obj,
                statusText: statusText,
                status: status,
            }
        } catch (error) {
            let status = (error.status) ? error.status : '500';
            response = {
                ...obj,
                statusText: 'FAIL',
                status: status

            }
        }
        return response

    });
    return Promise.all(arrayPromises)

}