/*
 * @Author: luoxue
 * @Date: 2023-02-24 10:44:12
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 10:51:06
 * @FilePath: \3. TypeScript\2.basic_types\never.ts
 * @Description:
 */
// never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）
var x;
var y;
// x = 123 // 编译错误，数字类型不能转为 never 类型
// 运行正确，never 类型可以赋值给 never类型
// 自执行函数，抛出异常，是 never 类型
// x = (
//   () => {
//     throw new Error('exception')
//   }
// )();
// 运行正确，never 类型可以赋值给 数字类型
y = (function () {
    throw new Error('exception');
})();
// 返回值为 never 的函数可以是抛出异常的情况
function error(message) {
    throw new Error(message);
}
;
// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop() {
    while (true) { }
}
;
