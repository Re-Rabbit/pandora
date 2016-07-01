'use strict';

var read = new Switch({ el: $('.js-switch'), checked: true });
var phone = new Validator({ el: $('[name=phone]'), regex: /^1\d{10}$/ });
var code = new Validator({ el: $('[name=code]') });
var business = new Validator({ el: $('[name=business]') });

var beforeCheck = function beforeCheck(_) {
    if (phone.getVal()) return true;
    alert('还没有填写手机号');
    return false;
};

new Msgcode({ el: $('#msg'), onBeforeSend: beforeCheck });

$('.js-ok').on('click', function (_) {
    if (!phone.validate()) {
        alert('请填写正确的手机号');
        return;
    }
    if (!code.validate()) {
        alert('请填写短信验证码');
        return;
    }
    if (!business.validate()) {
        alert('请填写企业或品牌企业');
        return;
    }

    if (!read.getVal()) {
        alert('请同意条款');
        return;
    }

    alert([phone, code, business, read].map(function (n) {
        return n.getVal();
    }).join(','));
});