'use strict';

//具有一个参数的简单函数
var s = function s(a) {
    return a;
};

var res = s('hello es6');

console.log(res);

// //没有参数需要加上小括号
var log = function log() {
    alert('no param');
};

log();

var add = function add(a, b) {
    return a + b;
};

console.log(add(2, 1));