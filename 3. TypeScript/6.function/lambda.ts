/*
 * @Author: luoxue
 * @Date: 2023-02-27 10:55:12
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 11:00:14
 * @FilePath: \3. TypeScript\6.function\lambda.ts
 * @Description: 
 */
/* 
Lambda 函数也称之为箭头函数。

箭头函数表达式的语法比函数表达式更短。

函数只有一行语句：
( [param1, param2,…param n] )=>statement
*/
var foo = (x:number) => 10 + x
console.log(foo(100)); // 110

var fun = (x:number) => {
  x = 1 + x
  console.log(x);
}
fun(10); // 11

export{}