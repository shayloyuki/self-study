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
let x: [string, number]
x = ['Runoob', 1]
// x = [1, 'Runoob'] // 报错
console.log(x[0]); // Runoob
console.log(x[1]); // 1
// 3. 枚举：定义数值集合
enum Color {
  Red,
  Green,
  Blue
}
let c:Color = Color.Blue
console.log(c); // 2
// 4. void：标识方法返回值的类型，表示该方法没有返回值
function hello():void {
  alert('Hello Runoob')
}
// 5. null: 对象值缺失
// 6. undefined: 初始化变量为一个未定义的值
// 7. never: 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值
// 注意：TypeScript 和 JavaScript 没有整数类型。
export{}