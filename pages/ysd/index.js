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

const CounterDefaultOptions = {
    el: null,
    val: 0,
    max: 100,
    min: 0
}

class Counter {
    constructor(opts) {
        let { el, val, max, min } = Object.assign(CounterDefaultOptions, opts)
        this.$el = el
        this.val = parseInt(val)
        this.init()
    }
    init() {
        this.setValue(this.val)
        this.bindEvent()
        this.inc()
        this.dec()
        this.validate()
    }
    setValue(val) {
        this.$val.val(val)
    }
    bindEvent() {
        this.$el.on('click', '.js-counter-inc', _ => {
            this.$el.trigger('inc')
        })
        this.$el.on('click', '.js-counter-dec', _ => {
            this.$el.trigger('dec')
        })
        this.$el.on('keyup', '.js-counter-val', evt => {
            this.$el.trigger('validate', [ evt.target.value ])
        })
    }
    inc() {
        this.$el.on('inc', evt => {
            this.setValue(Math.max(this.max, this.val + 1))
        })
    }
    dec() {
        this.$el.on('dec', evt => {
            this.setValue(Math.min(this.min, this.val - 1))
        })
    }
    validate() {
        this.$el.on('validate', (_, val) => {
            this.setValue(/([^-]\d)+/.test(val) ? val : this.val)
        })
    }
}

const SwitchDefaultOptions = {
    el: null,
    checked: false
}

const SwitchCheckedTpl = '<span class="ion-ios-checkbox ic--2x text-primary"></span>'
const SwitchUnCheckedTpl = '<span class="ion-ios-square-outline ic--2x text-gray"></span>'

class Switch {
    constructor() {
        let { el, checked } = Object.assign(SwitchDefaultOptions, opts)
        this.$el = el
        this.checked = checked
        this.$control = this.$el.find('.js-switch-control')
        this.$form = this.$el.find('.js-switch-form')
        this.init()
    }
    init() {
        this.setValue(this.checked)
        this.bindEvent()
        this.changed()
    }
    setValue(checked) {
        this.$form.prop('checked', checked)
        this.$control.html(checked ? SwitchCheckedTpl : SwitchUnCheckedTpl)
    }
    bindEvent() {
        this.$el.on('change', '.js-switch-form', evt => {
            this.trigger('changed', [evt.target.checked])
        })
    }
    changed() {
        this.$el.on('changed', (_, checked) => {
            this.setValue(checked)
        })
    }
}
