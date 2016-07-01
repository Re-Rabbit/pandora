'use strict';

$('.js-modal').on('click', function (evt) {
    $(this).find('.goods-modal').show();
    $(this).find('.goods-modal-bg').show();
});

$('.goods-modal-bg').on('click', function (_) {
    requestAnimationFrame(function (_) {
        $('.goods-modal').hide();
        $('.goods-modal-bg').hide();
    });
});