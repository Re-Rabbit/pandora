'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CounterDefaultOptions = {
    el: null,
    val: 0,
    max: 100,
    min: 0
};

var Counter = function () {
    function Counter(opts) {
        _classCallCheck(this, Counter);

        var _Object$assign = Object.assign(CounterDefaultOptions, opts);

        var el = _Object$assign.el;
        var val = _Object$assign.val;
        var max = _Object$assign.max;
        var min = _Object$assign.min;

        this.$el = el;
        this.$val = this.$el.find('.js-counter-val');
        this.max = max;
        this.min = min;
        this.val = parseInt(val);
        this.init();
    }

    _createClass(Counter, [{
        key: 'init',
        value: function init() {
            this.setValue(this.val);
            this.bindEvent();
            this.inc();
            this.dec();
            this.validate();
        }
    }, {
        key: 'setValue',
        value: function setValue(val) {
            this.val = val;
            this.$val.val(val);
            this.$el.trigger('changed', [val]);
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var _this = this;

            this.$el.on('click', '.js-counter-inc', function (_) {
                _this.$el.trigger('inc');
            });
            this.$el.on('click', '.js-counter-dec', function (_) {
                _this.$el.trigger('dec');
            });
            this.$el.on('keyup', '.js-counter-val', function (evt) {
                _this.$el.trigger('validate', [evt.target.value]);
            });
        }
    }, {
        key: 'inc',
        value: function inc() {
            var _this2 = this;

            this.$el.on('inc', function (evt) {
                _this2.setValue(Math.min(_this2.max, parseInt(_this2.val) + 1));
            });
        }
    }, {
        key: 'dec',
        value: function dec() {
            var _this3 = this;

            this.$el.on('dec', function (evt) {
                _this3.setValue(Math.max(_this3.min, parseInt(_this3.val) - 1));
            });
        }
    }, {
        key: 'validate',
        value: function validate() {
            var _this4 = this;

            this.$el.on('validate', function (_, val) {
                _this4.setValue(/\d+/.test(val) ? val : parseInt(_this4.val));
            });
        }
    }]);

    return Counter;
}();