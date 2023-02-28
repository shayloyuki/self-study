/*
 * @Author: luoxue
 * @Date: 2023-02-24 14:51:40
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 15:09:04
 * @FilePath: \3. TypeScript\4.operator\arithmetic.ts
 * @Description:
 */
var num1 = 10;
var num2 = 2;
var res = 0;
var a = 5;
var b = 8;
// 取余
res = num1 % num2;
console.log('余数：', res); // 0
// 自增
// 执行完语句后再自身加一
console.log('num1++:', num1++); // 10
console.log('num1:', num1); // 11
// 自身加一后在执行语句
console.log('++num2:', ++num2); // 3
console.log('num2:', num2); // 3
// 自减
console.log('a--:', a--); // 5
console.log('a:', a); // 4
console.log('--b:', --b); // 7
console.log('b:', b); // 7
