/*
 * @Author: luoxue
 * @Date: 2023-02-24 13:26:26
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 13:30:07
 * @FilePath: \3. TypeScript\3.variable_declaration\variable_inference.ts
 * @Description: 
 */
// 当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。
// 如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。

var num = 2 // 类型推断为 number
console.log('num:', num); // 2
// num = 'hello' // 编译错误
