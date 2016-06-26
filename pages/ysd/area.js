const AreaDefaultOptions = {
    el: null,
    col: 5
}

class Area {
    constructor(opts) {
        let { el, col } = Object.assign(AreaDefaultOptions, opts)
        this.$el = el
        this.col = col
        this.init()
    }
    init() {
        this.setVal(this.col)
        this.bindEvent()
        this.changed()
    }
    setVal(col) {
        this.$el.css('min-height', `${col * 14 * 1.5}px`)
    }
    bindEvent() {
        this.$el.on('keyup', evt => {
            this.$el.trigger('changed', [evt.target.value])
        })
    }
    changed() {
        this.$el.on('changed', (_, val) => {
            let len = val.split(/\n/).length
            this.setVal(Math.max(this.col, len + 2))
        })
    }
}
