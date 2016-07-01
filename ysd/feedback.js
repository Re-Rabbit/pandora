'use strict';

var $content = $('[name=content]');

new Area({ el: $content });

$('.js-ok').on('click', function (_) {
    var val = $content.val();
    alert(val || '请输入评价内容');
});