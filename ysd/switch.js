'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SwitchDefaultOptions = {
    el: null,
    checked: false
};

var SwitchCheckedTpl = '<span class="ion-ios-checkbox ic--2x text-primary"></span>';
var SwitchUnCheckedTpl = '<span class="ion-ios-square-outline ic--2x text-gray"></span>';

var Switch = function () {
    function Switch(opts) {
        _classCallCheck(this, Switch);

        var _Object$assign = Object.assign({}, SwitchDefaultOptions, opts);

        var el = _Object$assign.el;
        var checked = _Object$assign.checked;

        this.$el = el;
        this.checked = checked;
        this.$control = this.$el.find('.js-switch-control');
        this.$form = this.$el.find('.js-switch-form');
        this.init();
    }

    _createClass(Switch, [{
        key: 'init',
        value: function init() {
            this.setVal(this.checked);
            this.bindEvent();
            this.changed();
        }
    }, {
        key: 'setVal',
        value: function setVal(checked) {
            this.$form.prop('checked', checked);
            this.$control.html(checked ? SwitchCheckedTpl : SwitchUnCheckedTpl);
            return this;
        }
    }, {
        key: 'getVal',
        value: function getVal() {
            return this.$form.prop('checked');
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var _this = this;

            this.$el.on('change', '.js-switch-form', function (evt) {
                _this.$el.trigger('changed', [evt.target.checked]);
            });
            return this;
        }
    }, {
        key: 'changed',
        value: function changed(cb) {
            var _this2 = this;

            this.$el.on('changed', function (_, checked) {
                _this2.setVal(checked);
                cb && cb(checked);
            });
            return this;
        }
    }]);

    return Switch;
}();