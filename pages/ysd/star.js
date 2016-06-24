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

const defaultOptions = {
    el: null
}

class Star {
    constructor(opts) {
	let { el } = Object.assign({}, defaultOptions, opts)
	this.el = el
	this.init()
    }
    init() {
	let el = this.el
	el.on('click', 'span', function() {
	    let idx = $(this).index()
	    el.html(render(constArr(idx)))
	})
    }
}
