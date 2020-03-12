const fetch = require('node-fetch');

const counters = (links) => {
    let okCounter = 0;
    let failCounter = 0;
    let unique = 0;

}
const responseHttp = (obj) => {

    /* obj.forEach(element => {
         fetch(element.link)
             .then(res => {
                 res.text();
                 console.log(res);

             })
             .then(res => {
                 console.log(res);

             });
     });*/

}
module.exports = {
    http: responseHttp,
    counters: counters,
}