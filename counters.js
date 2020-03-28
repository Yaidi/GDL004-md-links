const { uniqBy } = require('lodash');
module.exports = (arrayObjs) => {
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
    const counter = {
        Ok: okCounter,
        Broken: failCounter,
        Unique: uniqueCounter,
        Total: totalCounter,
    }
    return counter
}