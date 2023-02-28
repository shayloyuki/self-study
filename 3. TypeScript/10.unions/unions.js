"use strict";
/*
 * @Author: luoxue
 * @Date: 2023-02-27 17:04:07
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 17:04:11
 * @FilePath: \3. TypeScript\10.unions\unions.ts
 * @Description:
 */
/*
联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。

注意：只能赋值指定的类型，如果赋值其它类型就会报错
*/
exports.__esModule = true;
var val;
val = 12;
val = 'hello';
// val = ['1','2'] // 报错
function disp(name) {
    if (typeof name == 'string') {
        console.log(name);
    }
    else if (name instanceof Array) {
        name.forEach(function (ele) { return console.log(ele); });
    }
}
disp('runoob');
disp(["Google", "Taobao", "Facebook"]);
