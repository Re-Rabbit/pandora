console.log('hello world')

const ValidatorDefaultOptions = {
    el: null,
    require: null,
    regex: null
}

class Validator {
    constructor(opts) {
        let { el } = Object.assign(ValidatorDefaultOptions, opts)
    }
}
