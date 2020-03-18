const fetch = require('node-fetch');

const counters = (links) => {
    let okCounter = 0;
    let failCounter = 0;
    let uniqueCounter = 0;
}
const responseHttp = (array) => {
    array.forEach(element => {
        fetch(element.link)
            .then(res => {
                element.status = res.status;
                element.statusText = res.statusText;
            })
            .catch((err) => {
                if (err.errno) {
                    const obj = {
                        link: err.message,
                        statusText: 'FAIL',
                    }
                    array.push(obj)
                }
            })

    });

}
module.exports = {
    http: responseHttp,
    counters: counters,
}