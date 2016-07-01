"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidatorDefaultOptions = {
    el: null,
    regex: /^.+$/
};

var Validator = function () {
    function Validator(opts) {
        _classCallCheck(this, Validator);

        var _Object$assign = Object.assign({}, ValidatorDefaultOptions, opts);

        var el = _Object$assign.el;
        var regex = _Object$assign.regex;

        this.$el = el;
        this.regex = regex;
        this.init();
    }

    _createClass(Validator, [{
        key: "init",
        value: function init() {}
    }, {
        key: "validate",
        value: function validate() {
            var val = this.getVal();
            return this.regex.test(val);
        }
    }, {
        key: "getVal",
        value: function getVal() {
            return this.$el.val().trim();
        }
    }]);

    return Validator;
}();