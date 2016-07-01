'use strict';

var tab = new Tab({ el: $('.js-tab') });
var phone = new Validator({ el: $('[name=phone]'), regex: /^1\d{10}$/ });
var phone1 = new Validator({ el: $('[name=phone1]'), regex: /^1\d{10}$/ });
var code = new Validator({ el: $('[name=code]') });
var pwd = new Validator({ el: $('[name=pwd]') });

var beforeCheck = function beforeCheck(_) {
           if (phone.getVal()) return true;
           alert('还没有填写手机号');
           return false;
};

new Msgcode({ el: $('#msg'), onBeforeSend: beforeCheck });

$('.js-ok').on('click', function (_) {
           if (tab.getVal() === 0) {
                      if (!phone.validate()) {
                                 alert('请填写正确的手机号');
                                 return;
                      }
                      if (!code.validate()) {
                                 alert('请填写短信验证码');
                                 return;
                      }
           } else {
                      if (!phone1.validate()) {
                                 alert('请填写正确的手机号');
                                 return;
                      }
                      if (!pwd.validate()) {
                                 alert('请输入密码');
                                 return;
                      }
           }

           alert([phone, code, phone1, pwd].map(function (n) {
                      return n.getVal();
           }).join(','));
});