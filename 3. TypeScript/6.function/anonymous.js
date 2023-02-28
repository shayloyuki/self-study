"use strict";
/*
 * @Author: luoxue
 * @Date: 2023-02-27 10:25:00
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 10:30:56
 * @FilePath: \3. TypeScript\6.function\anonymous.ts
 * @Description:
 */
/*
可以将匿名函数赋值给一个变量，这种表达式就成为函数表达式。
var res = function( [arguments] ) { ... }
*/
exports.__esModule = true;
// 1. 匿名函数
var msg = function () {
    return 'hello world';
};
console.log(msg()); // 'hello world'
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2)); // 24
// 2. 匿名函数自调用
(function () {
    var x = 'Hi';
    console.log(x); // 'Hi'
})();
