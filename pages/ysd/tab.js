const TabDefaultOptions = {
    el: null,
    idx: 0
}

class Tab {
    constructor(opts) {
        let { el, idx } = Object.assign({}, TabDefaultOptions, opts)
        this.$el = el
	this.$titles = this.$el.find('.js-tab-title')
	this.$contents = this.$el.find('.js-tab-content')
	this.idx = idx
        this.init()
    }
    init() {
        this.bindEvent()
    }
    bindEvent() {
	let { $el, $titles, $contents, setVal, getVal } = this
	let self = this
	
        $el.on('click', '.js-tab-title', function() {
	    let idx = $(this).index('.js-tab-title')
	    
	    $titles
		.removeClass('active')
		.eq(idx).addClass('active')
	    $contents
		.removeClass('active')
		.eq(idx).addClass('active')

	    self.setVal(idx)

	    $el.trigger('changed', [idx])
        }).find('.js-tab-title').eq(self.getVal()).click()
	
	return this
    }
    setVal(idx) {
	this.idx = idx
	return this
    }
    getVal() {
	return this.idx
    }
}
