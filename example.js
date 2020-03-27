const mdLinks = require('./index');

mdLinks('./Prueba/asa.md', { validate: true })
    .then((data) => {
        /** I handle the data
         * 
         */

        console.log(data);
    }).catch((error) => {
        console.log(error)
    })