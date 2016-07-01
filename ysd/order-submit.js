'use strict';

var invoice = new Switch({ el: $('.js-invoice'), checked: false });
var person = new Switch({ el: $('.js-person'), checked: true });
var org = new Switch({ el: $('.js-org'), checked: false });
var orgc = new Validator({ el: $('[name=orgc]') });

var $next1 = $('.js-next-1').hide();
var $next2 = $('.js-next-2').hide();

var nobd = function nobd(sw) {
    return sw.$el.parents('.list-control').toggleClass('nobd');
};

invoice.changed(function (checked) {
    checked ? $next1.show() : $next1.hide();
    nobd(invoice);
});

person.changed(function (checked) {
    org.setVal(!checked);
    !checked ? $next2.show() : $next2.hide();
    nobd(person);
});

org.changed(function (checked) {
    person.setVal(!checked);
    checked ? $next2.show() : $next2.hide();
    nobd(person);
});

$('.js-submit').on('click', function (_) {
    if (invoice.getVal() && org.getVal() && !orgc.validate()) {
        alert('还没有填写公司名称');
        return;
    }
});