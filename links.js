const fetch = require('node-fetch');

const counters = (links) => {
    let okCounter = 0;
    let failCounter = 0;
    let unique = 0;

}
const responseHttp = (array) => {

    array.forEach(element => {
        fetch(element.link)
            .then(res => {
                res.text();
                console.log(res);

            })
            .then(res => {
                console.log(res);

            })
            .catch((err) => {
                console.log(err);

            })
    });

}
module.exports = {
    http: responseHttp,
    counters: counters,
}