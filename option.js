module.exports = route = (option) => {
    const options = {
        validate: false,
        stats: false
    }
    if (option.indexOf('--validate') != -1) {
        options.validate = true;
    }
    if (option.indexOf('--stats') != -1) {
        options.stats = true;
    }
    return options
}