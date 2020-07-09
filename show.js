const { green, yellow, blue, magenta, gray, red} = require('chalk');

const evaluate =(condition, text, add)=> condition ? green(text, add) : red(text, add);
const textOk = (evaluate)=> evaluate === 'OK';
const validate = (arrayObjs) => {
    let res = []
    arrayObjs.forEach(link => {
        res += [ yellow(link.path) + ' ' +
            blue(link.link) + ' ' +
            magenta(link.text) + ' ' +
            evaluate( textOk(link.statusText), link.statusText, link.status) + '\n']
           
    });
    return res
}
const stats = (counter, path) => {
   let res = [];
   for(let i=0; i < path.length ; i++){
    res += [ '\n' +
    yellow('Path: ') + path[i] + '\n' +
     'Total: ' + counter.Total + '\n'
     + 'Unique: ' + counter.Unique + '\n' ]
   }
    return res
}
const statsValidate = (counter, path) => {
    let res = []
    for(let i=0; i < path.length; i++){
        res +=  [ '\n' +
            yellow('Path: ') + path[i] + '\n' +
            magenta('Total: ' + counter.Total) + '\n' +
            gray('Unique: ' + counter.Unique) + '\n' +
            red('Broken: ' + counter.Broken) + '\n' +
            green('OK: ' + counter.Ok) +'\n'
            ]
    }
    
 return res
}
const defect = (arrayObjs) => {
    let res= [];
    arrayObjs.forEach((link) => {
     res += [yellow(link.path) + ' '+
             blue(link.link) + ' ' +
             magenta(link.text) + '\n']
    })
    return res;
}
module.exports = {
    validate,
    stats,
    statsValidate,
    defect,
}