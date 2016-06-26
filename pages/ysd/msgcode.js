const MsgcodeOptions = {
    el: null,
    count: 60,
    onBeforeSend: function(){}
}

const MsgcodeReadyTpl = _ => '发送验证码'
const MsgcodeCountTpl = n => `${n}秒后再次发送`

class Msgcode {
    constructor(opts) {
        let { el, count, onBeforeSend } = Object.assign(MsgcodeOptions, opts)
        this.$el = el
        this.sum = count
        this.count = this.sum
        this.onBeforeSend = onBeforeSend
        this.state = 1 // 1.ready 2.wait
        this.tick = null
        this.init()
    }
    init() {
        this.bindEvent()
    }
    bindEvent() {
        this.$el.on('click', evt => {
	    evt.preventDefault()
            if(this.state === 2 && this.tick) return
            if(!this.onBeforeSend()) return
            this.tick = setInterval(this.countdown.bind(this), 1000)
        })
    }
    countdown() {
        if(this.count <= 0) {
            clearInterval(this.tick)
            this.count = this.sum
            this.setState(1)
            this.$el.html(MsgcodeReadyTpl())
            return
        }
        this.setState(2)
        this.count = this.count - 1
        this.$el.html(MsgcodeCountTpl(this.count))
    }
    getState() {
        return this.state === 1 ? 'ready' : 'wait'
    }
    setState(s) {
        return this.state = s
    }
}
