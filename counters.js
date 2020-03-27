const { uniqBy } = require('lodash');
module.exports = (obj) => {
    let okCounter = 0;
    let failCounter = 0;
    let uniqueCounter = uniqBy(obj, 'link').length;
    let totalCounter = 0;

    obj.forEach((link) => {

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