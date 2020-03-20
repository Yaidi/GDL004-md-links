module.exports = route = (option) => {
    const options = {
        validate: false,
        stats: false,
        help: false,
        version: false,
        author: false,
    }
    if (option == undefined) {
        return options
    }

    if (option.includes('--validate')) {
        options.validate = true;
    }
    if (option.includes('--stats')) {
        options.stats = true;
    }
    return options
}