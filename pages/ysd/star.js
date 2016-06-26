const fillArr = (n) => (f) => {
    return Array(n).fill(f)
}

const constArr = (idx = 0) => {
    let i = idx + 1
    return [].concat(fillArr(i)(1)).concat(fillArr(5 - i)(0))
}

const render = (arr) => {
    let tpl = (n) => `
  <span class="${n === 1 ? "star--fill" : "star--empty"} ion-md-star ic--1d5x"></span>
`
    return arr.map(tpl).join('')
}

const sum = (a, b) => a + b

const StarDefaultOptions = {
    el: null,
    val: 5
}

class Star {
    constructor(opts) {
	let { el, val } = Object.assign({}, StarDefaultOptions, opts)
	this.$el = el
	this.arr = fillArr(val)(1)
	this.init()
    }
    init() {
	this.bindEvent()
	this.changed()
	this.setVal(this.arr)
	
	return this
    }
    bindEvent() {
	let { $el } = this
	
	$el.on('click', 'span', function() {
	    let idx = $(this).index()
	    $el.trigger('changed', [idx])
	})

	return this
    }
    getVal() {
	return this.arr.reduce(sum)
    }
    setVal(arr) {
	this.arr = arr
	this.$el.html(render(arr))
	return this
    }
    changed(cb) {
	this.$el.on('changed', (_, idx) => {
	    this.setVal(constArr(idx))
	    cb && cb(this.getVal())
	})

	return this
    }
}
