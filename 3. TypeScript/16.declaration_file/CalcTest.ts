/*
 * @Author: luoxue
 * @Date: 2023-02-28 14:54:34
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 14:55:57
 * @FilePath: \3. TypeScript\16.declaration_file\CalcTest.ts
 * @Description: 
 */
/// <reference path = "Calc.d.ts" />
var obj = new Runoob.Calc()
// obj.doSum('hello') // 报错，类型“string”的参数不能赋给类型“number”的参数
console.log(obj.doSum(10));