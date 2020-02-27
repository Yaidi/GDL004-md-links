const optionChoose = (option) => {
    if (option == options['--stats --validate']) {
        statsValidate()
    } else if ('--stats') {
        stats()
    } else if ('--validate') {
        validate()
    } else {
        defect()
    }
    return new Promise((resolve, reject) => {
        if (err) {
            reject(err);
        } else {
            resolve();
        }
    })
}

const stats = () => {
    //total y Unique
}
const validate = () => {
    // Ok or Fail
}
const defect = () =>
    // Imprimir los links junto con un texto de que es el link
}
const statsValidate = () => {
    // Total, Unique and Broken
}
const options = {
    '--stats': stats,
    '--validate': validate,
    'defect': defect,
    '--stats --validate': statsValidate,
}
module.exports = {
    options: options,
    optionChoose: optionChoose,
}