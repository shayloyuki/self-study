/*
 * @Author: luoxue
 * @Date: 2023-02-24 11:09:00
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 11:15:17
 * @FilePath: \3. TypeScript\3.variable_declaration\variable_declaration.ts
 * @Description: 
 */
// 注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名
var yourName:string = 'Runoob'
var score1:number = 1
var score2:number = 2
var sum = score1 + score2
console.log("名字: "+yourName)
console.log("第一个科目成绩: "+score1)
console.log("第二个科目成绩: "+score2)
console.log("总成绩: "+sum)

export{}