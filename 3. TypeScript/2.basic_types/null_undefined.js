"use strict";
exports.__esModule = true;
/*
 * @Author: luoxue
 * @Date: 2023-02-24 10:38:49
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 10:42:07
 * @FilePath: \3. TypeScript\null_undefined.ts
 * @Description:
 */
// 1. Null 和 Undefined 是其他任何类型（包括 void）的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined。而在TypeScript中启用严格的空校验（--strictNullChecks）特性，就可以使得null 和 undefined 只能被赋值给 void 或本身对应的类型
// 启用 --strictNullChecks
var x;
x = 1;
// x = undefined // 编译错误
// x = null // 编译错误
// 2. 如果一个类型可能出现 null 或 undefined， 可以用 | 来支持多种类型
// 启用 --strictNullChecks
var m;
m = 1;
m = undefined;
m = null;
