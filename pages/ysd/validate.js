const ValidatorDefaultOptions = {
    el: null,
    regex: /^.+$/
}

class Validator {
    constructor(opts) {
        let { el, regex } = Object.assign({}, ValidatorDefaultOptions, opts)
        this.$el = el
        this.regex = regex
        this.init()
    }
    init() {

    }
    validate() {
        let val = this.getVal()
        return this.regex.test(val)
    }
    getVal() {
        return this.$el.val().trim()
    }
}
