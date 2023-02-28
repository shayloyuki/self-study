/*
 * @Author: luoxue
 * @Date: 2023-02-28 10:21:24
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 10:22:46
 * @FilePath: \3. TypeScript\12.class\instanceof.ts
 * @Description: 
 */
/* 
instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
*/

class Person {}
var obj = new Person()
var isPerson = obj instanceof Person 
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson); // obj 对象是 Person 类实例化来的吗？ true
export{}