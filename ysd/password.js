'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var validators = ['oldpwd', 'pwd', 'repwd'].map(function (n) {
    return new Validator({ el: $('[name=' + n + ']') });
});

$('.js-ok').on('click', function (_) {
    var vals = validators.map(function (n) {
        return n.getVal();
    });

    var _vals = _slicedToArray(vals, 3);

    var v1 = _vals[0];
    var v2 = _vals[1];
    var v3 = _vals[2];

    var turth = vals.reduce(function (a, c) {
        return a && c;
    }, true);
    if (!turth) {
        alert('请填写表单');
        return;
    }
    if (v2 !== v3) {
        alert('两次输入密码不一致');
        return;
    }
    alert(v1 + ', ' + v2 + ', ' + v3);
});