"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fillArr = function fillArr(n) {
			return function (f) {
						return Array(n).fill(f);
			};
};

var constArr = function constArr() {
			var idx = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

			var i = idx + 1;
			return [].concat(fillArr(i)(1)).concat(fillArr(5 - i)(0));
};

var render = function render(arr) {
			var tpl = function tpl(n) {
						return "\n  <span class=\"" + (n === 1 ? "star--fill" : "star--empty") + " ion-md-star ic--1d5x\"></span>\n";
			};
			return arr.map(tpl).join('');
};

var sum = function sum(a, b) {
			return a + b;
};

var StarDefaultOptions = {
			el: null,
			val: 5
};

var Star = function () {
			function Star(opts) {
						_classCallCheck(this, Star);

						var _Object$assign = Object.assign({}, StarDefaultOptions, opts);

						var el = _Object$assign.el;
						var val = _Object$assign.val;

						this.$el = el;
						this.arr = fillArr(val)(1);
						this.init();
			}

			_createClass(Star, [{
						key: "init",
						value: function init() {
									this.bindEvent();
									this.changed();
									this.setVal(this.arr);

									return this;
						}
			}, {
						key: "bindEvent",
						value: function bindEvent() {
									var $el = this.$el;


									$el.on('click', 'span', function () {
												var idx = $(this).index();
												$el.trigger('changed', [idx]);
									});

									return this;
						}
			}, {
						key: "getVal",
						value: function getVal() {
									return this.arr.reduce(sum);
						}
			}, {
						key: "setVal",
						value: function setVal(arr) {
									this.arr = arr;
									this.$el.html(render(arr));
									return this;
						}
			}, {
						key: "changed",
						value: function changed(cb) {
									var _this = this;

									this.$el.on('changed', function (_, idx) {
												_this.setVal(constArr(idx));
												cb && cb(_this.getVal());
									});

									return this;
						}
			}]);

			return Star;
}();