'use strict';

var stars = $('.star').toArray().map(function (n) {
    return new Star({ el: $(n) });
});
var unname = new Switch({ el: $('.js-switch'), checked: false });
var area = new Area({ el: $('[name=content]'), col: 3 });

var showNew = function showNew(_) {
    return $('.js-new').addClass('active');
};

var pre1 = new Preview({ el: $('.js-box1'), cb: showNew });
var pre2 = new Preview({ el: $('.js-box2'), cb: showNew });
var pre3 = new Preview({ el: $('.js-box3'), cb: showNew });

showNew().on('click', function (_) {
    var pres = [pre1, pre2, pre3].filter(function (n) {
        return !n.isShow();
    });
    pres[0].trigger();
    if (pres.length === 1) {
        $('.js-new').removeClass('active');
    }
});