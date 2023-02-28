/*
 * @Author: luoxue
 * @Date: 2023-02-24 11:15:44
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 11:39:16
 * @FilePath: \3. TypeScript\3.variable_declaration\type_assertion.ts
 * @Description: 
 */
// 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型

// 1. <类型>值
var str = '1'
var str2:number = <number><any>str // 正确, 先断言 str 为 any，再断言为 number
// var str2:number = <any>str // 正确, 断言 str 为 any
// var str2:number = <number>str // 报错, 不能断言 string 为 number
// var str3:number = str // 报错，不能赋值 string 给 number
console.log(str); // '1'
console.log(str2); // '1'

// 2. 值 as 类型（推荐，因为第一种语法和 JSX 的语法存在歧义）
var str4:number = str as any as number // 正确, 先断言 str 为 any，再断言为 number
var str4:number = str as any // 正确, 断言 str 为 any
console.log(str4); // '1'

export{}