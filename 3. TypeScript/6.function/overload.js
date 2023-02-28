"use strict";
/*
 * @Author: luoxue
 * @Date: 2023-02-27 11:08:47
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 13:13:22
 * @FilePath: \3. TypeScript\6.function\overload.ts
 * @Description:
 */
/*
函数重载：
重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

1. 参数类型不同
2. 参数数量不同
3. 参数类型顺序不同

如果参数类型不同，则参数类型应设置为 any。

参数数量不同你可以将不同的参数设置为可选。
*/
exports.__esModule = true;
// 定义实现签名
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc"); // abc undefined
disp(1, "xyz"); // 1 'xyz'
// === 例2 ===
var suits = ["hearts", "spades", "clubs", "diamonds"];
function greet(person) {
    if (typeof person === 'string') {
        // 字符串
        return "Hello, ".concat(person, " is a string");
        // } else if (person instanceof Array) {
    }
    else if (Array.isArray(person)) {
        // 数组
        return person.map(function (name) { return "Hello, ".concat(name); });
    }
}
console.log(greet(suits[0]));
console.log(greet(suits));
