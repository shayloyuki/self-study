"use strict";
exports.__esModule = true;
/*
 * @Author: luoxue
 * @Date: 2023-02-23 17:02:49
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 10:13:01
 * @FilePath: \3. TypeScript\basic_types.ts
 * @Description:
 */
// 1. any：声明为 any 的变量可以赋予任意类型的值
// 2. 元组：已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
var x;
x = ['Runoob', 1];
// x = [1, 'Runoob'] // 报错
console.log(x[0]); // Runoob
console.log(x[1]); // 1
// 3. 枚举：定义数值集合
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c); // 2
// 4. void：标识方法返回值的类型，表示该方法没有返回值
function hello() {
    alert('Hello Runoob');
}
