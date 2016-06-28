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
        this.$val = this.$el.find('.js-counter-val')
        this.max = max
        this.min = min
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
        this.val = val
        this.$val.val(val)
	this.$el.trigger('changed', [val])
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
            this.setValue(Math.min(this.max, parseInt(this.val) + 1))
        })
    }
    dec() {
        this.$el.on('dec', evt => {
            this.setValue(Math.max(this.min, parseInt(this.val) - 1))
        })
    }
    validate() {
        this.$el.on('validate', (_, val) => {
            this.setValue(/\d+/.test(val) ? val : parseInt(this.val))
        })
    }
}
