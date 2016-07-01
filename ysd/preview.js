'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PreviewDefaultOptions = {
			el: null
};

var PreviewFilter = /^(?:image\/gif|image\/jpeg|image\/png|image\/jpg)$/i;

var Preview = function () {
			function Preview(opts) {
						_classCallCheck(this, Preview);

						var _Object$assign = Object.assign({}, PreviewDefaultOptions, opts);

						var el = _Object$assign.el;
						var cb = _Object$assign.cb;

						this.$el = el;
						this.$img = this.$el.find('.js-img');
						this.$trigger = this.$el.find('.js-form');
						this.$remove = this.$el.find('.js-remove');
						this.cb = cb;
						this.reader = new FileReader();
						this.init();
			}

			_createClass(Preview, [{
						key: 'init',
						value: function init() {
									this.bindEvent();
									this.changed();
									this.removed();
									return this;
						}
			}, {
						key: 'bindEvent',
						value: function bindEvent() {
									var _this = this;

									this.reader.onload = function (evt) {
												_this.setVal(evt.target.result);
												_this.show();
									};

									this.$el.on('change', function (evt) {
												var file = evt.target.files[0];
												_this.$el.trigger('changed', [file]);
									});

									this.$remove.on('click', function (evt) {
												evt.preventDefault();
												evt.stopPropagation();
												_this.$el.trigger('removed');
									});

									return this;
						}
			}, {
						key: 'isShow',
						value: function isShow() {
									return this.$el.hasClass('active');
						}
			}, {
						key: 'setVal',
						value: function setVal(data) {
									this.$img.prop('src', data);
									return this;
						}
			}, {
						key: 'show',
						value: function show() {
									this.$el.addClass('active');
									return this;
						}
			}, {
						key: 'hide',
						value: function hide() {
									this.$el.removeClass('active');
									return this;
						}
			}, {
						key: 'trigger',
						value: function trigger(cb) {
									this.$trigger.click();
									return this;
						}
			}, {
						key: 'changed',
						value: function changed(cb) {
									var _this2 = this;

									this.$el.on('changed', function (_, f) {
												if (!PreviewFilter.test(f.type)) {
															alert('不是有效的图片格式');
															return;
												}
												_this2.reader.readAsDataURL(f);
									});

									return this;
						}
			}, {
						key: 'removed',
						value: function removed() {
									var _this3 = this;

									this.$el.on('removed', function (_) {
												_this3.hide();
												_this3.cb();
												_this3.setVal('');
									});

									return this;
						}
			}]);

			return Preview;
}();