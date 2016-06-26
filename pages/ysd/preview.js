const PreviewDefaultOptions = {
    el: null
}

const PreviewFilter = /^(?:image\/gif|image\/jpeg|image\/png|image\/jpg)$/i;


class Preview {
    constructor(opts) {
	let { el, cb } = Object.assign({}, PreviewDefaultOptions, opts)
	this.$el = el
	this.$img = this.$el.find('.js-img')
	this.$trigger = this.$el.find('.js-form')
	this.$remove = this.$el.find('.js-remove')
	this.cb = cb
	this.reader = new FileReader();
	this.init()
    }
    init() {
	this.bindEvent()
	this.changed()
	this.removed()
	return this
    }
    bindEvent() {
	this.reader.onload = evt => {
	    this.setVal(evt.target.result)
	    this.show()
	}
	
	this.$el.on('change', evt => {
	    let file = evt.target.files[0]
	    this.$el.trigger('changed', [file])
	})

	this.$remove.on('click', evt => {
	    evt.preventDefault()
	    evt.stopPropagation()
	    this.$el.trigger('removed')
	})

	return this
    }
    isShow() {
	return this.$el.hasClass('active')
    }
    setVal(data) {
	this.$img.prop('src', data)
	return this
    }
    show() {
	this.$el.addClass('active')
	return this
    }
    hide() {
	this.$el.removeClass('active')
	return this
    }
    trigger(cb) {
	this.$trigger.click()
	return this
    }
    changed(cb) {
	this.$el.on('changed', (_, f) => {
	    if(!PreviewFilter.test(f.type)) {
		alert('不是有效的图片格式')
		return
	    }
	    this.reader.readAsDataURL(f)
	})

	return this
    }
    removed() {
	this.$el.on('removed', _ => {
	    this.hide()
	    this.cb()
	    this.setVal('')
	})

	return this
    }
}
