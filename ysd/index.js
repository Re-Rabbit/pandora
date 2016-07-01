'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('hello world');

var ValidatorDefaultOptions = {
    el: null,
    require: null,
    regex: null
};

var Validator = function Validator(opts) {
    _classCallCheck(this, Validator);

    var _Object$assign = Object.assign(ValidatorDefaultOptions, opts);

    var el = _Object$assign.el;
};