const { uniqBy } = require('lodash');
module.exports = (arrayObjs) => {
    let arrayCounter = new Array;
    let okCounter = 0;
    let failCounter = 0;
    let uniqueCounter = uniqBy(arrayObjs, 'link').length;
    let totalCounter = 0;

    arrayObjs.forEach((link) => {

        if (link.statusText == 'OK') {
            okCounter++
        }
        if (link.statusText == 'FAIL' || link.statusText == 'Not Found') {
            failCounter++
        }
        totalCounter++
    })
     counter = {
        Ok: okCounter,
        Broken: failCounter,
        Unique: uniqueCounter,
        Total: totalCounter,
    }
       // arrayCounter.push(counter)
    return counter
}