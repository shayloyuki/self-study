"use strict";
/*
 * @Author: luoxue
 * @Date: 2023-02-27 10:32:32
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 10:34:28
 * @FilePath: \3. TypeScript\6.function\constructed.ts
 * @Description:
 */
/*
构造函数 Function() 来定义函数
var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
参数说明：
arg1, arg2, ... argN：参数列表。
functionBody：一个含有包括函数定义的 JavaScript 语句的字符串
*/
exports.__esModule = true;
var myFunc = new Function('a', 'b', 'return a*b');
var x = myFunc(4, 3);
console.log(x);
