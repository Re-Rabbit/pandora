'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TabDefaultOptions = {
				el: null,
				idx: 0
};

var Tab = function () {
				function Tab(opts) {
								_classCallCheck(this, Tab);

								var _Object$assign = Object.assign({}, TabDefaultOptions, opts);

								var el = _Object$assign.el;
								var idx = _Object$assign.idx;

								this.$el = el;
								this.$titles = this.$el.find('.js-tab-title');
								this.$contents = this.$el.find('.js-tab-content');
								this.idx = idx;
								this.init();
				}

				_createClass(Tab, [{
								key: 'init',
								value: function init() {
												this.bindEvent();
								}
				}, {
								key: 'bindEvent',
								value: function bindEvent() {
												var $el = this.$el;
												var $titles = this.$titles;
												var $contents = this.$contents;
												var setVal = this.setVal;
												var getVal = this.getVal;

												var self = this;

												$el.on('click', '.js-tab-title', function () {
																var idx = $(this).index('.js-tab-title');

																$titles.removeClass('active').eq(idx).addClass('active');
																$contents.removeClass('active').eq(idx).addClass('active');

																self.setVal(idx);

																$el.trigger('changed', [idx]);
												}).find('.js-tab-title').eq(self.getVal()).click();

												return this;
								}
				}, {
								key: 'setVal',
								value: function setVal(idx) {
												this.idx = idx;
												return this;
								}
				}, {
								key: 'getVal',
								value: function getVal() {
												return this.idx;
								}
				}]);

				return Tab;
}();