'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AreaDefaultOptions = {
    el: null,
    col: 5
};

var Area = function () {
    function Area(opts) {
        _classCallCheck(this, Area);

        var _Object$assign = Object.assign(AreaDefaultOptions, opts);

        var el = _Object$assign.el;
        var col = _Object$assign.col;

        this.$el = el;
        this.col = col;
        this.init();
    }

    _createClass(Area, [{
        key: 'init',
        value: function init() {
            this.setVal(this.col);
            this.bindEvent();
            this.changed();
        }
    }, {
        key: 'getVal',
        value: function getVal() {
            return this.$el.val();
        }
    }, {
        key: 'setVal',
        value: function setVal(col) {
            this.$el.css('min-height', col * 14 * 1.5 + 'px');
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var _this = this;

            this.$el.on('keyup', function (evt) {
                _this.$el.trigger('changed', [evt.target.value]);
            });
        }
    }, {
        key: 'changed',
        value: function changed() {
            var _this2 = this;

            this.$el.on('changed', function (_, val) {
                var len = val.split(/\n/).length;
                _this2.setVal(Math.max(_this2.col, len + 2));
            });
        }
    }]);

    return Area;
}();