const SwitchDefaultOptions = {
    el: null,
    checked: false
}

const SwitchCheckedTpl = '<span class="ion-ios-checkbox ic--2x text-primary"></span>'
const SwitchUnCheckedTpl = '<span class="ion-ios-square-outline ic--2x text-gray"></span>'

class Switch {
    constructor(opts) {
        let { el, checked } = Object.assign({}, SwitchDefaultOptions, opts)
        this.$el = el
        this.checked = checked
        this.$control = this.$el.find('.js-switch-control')
        this.$form = this.$el.find('.js-switch-form')
        this.init()
    }
    init() {
        this.setVal(this.checked)
        this.bindEvent()
	this.changed()
    }
    setVal(checked) {
        this.$form.prop('checked', checked)
        this.$control.html(checked ? SwitchCheckedTpl : SwitchUnCheckedTpl)
	return this
    }
    getVal() {
	return this.$form.prop('checked')
    }
    bindEvent() {
        this.$el.on('change', '.js-switch-form', evt => {
            this.$el.trigger('changed', [evt.target.checked])
        })
	return this
    }
    changed(cb) {
        this.$el.on('changed', (_, checked) => {
            this.setVal(checked)
	    cb && cb(checked)
        })
	return this
    }
}
