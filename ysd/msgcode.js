'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MsgcodeOptions = {
    el: null,
    count: 60,
    onBeforeSend: function onBeforeSend() {}
};

var MsgcodeReadyTpl = function MsgcodeReadyTpl(_) {
    return '发送验证码';
};
var MsgcodeCountTpl = function MsgcodeCountTpl(n) {
    return n + '秒后再次发送';
};

var Msgcode = function () {
    function Msgcode(opts) {
        _classCallCheck(this, Msgcode);

        var _Object$assign = Object.assign(MsgcodeOptions, opts);

        var el = _Object$assign.el;
        var count = _Object$assign.count;
        var onBeforeSend = _Object$assign.onBeforeSend;

        this.$el = el;
        this.sum = count;
        this.count = this.sum;
        this.onBeforeSend = onBeforeSend;
        this.state = 1; // 1.ready 2.wait
        this.tick = null;
        this.init();
    }

    _createClass(Msgcode, [{
        key: 'init',
        value: function init() {
            this.bindEvent();
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var _this = this;

            this.$el.on('click', function (evt) {
                evt.preventDefault();
                if (_this.state === 2 && _this.tick) return;
                if (!_this.onBeforeSend()) return;
                _this.tick = setInterval(_this.countdown.bind(_this), 1000);
            });
        }
    }, {
        key: 'countdown',
        value: function countdown() {
            if (this.count <= 0) {
                clearInterval(this.tick);
                this.count = this.sum;
                this.setState(1);
                this.$el.html(MsgcodeReadyTpl());
                return;
            }
            this.setState(2);
            this.count = this.count - 1;
            this.$el.html(MsgcodeCountTpl(this.count));
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this.state === 1 ? 'ready' : 'wait';
        }
    }, {
        key: 'setState',
        value: function setState(s) {
            return this.state = s;
        }
    }]);

    return Msgcode;
}();