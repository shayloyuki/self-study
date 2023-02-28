/*
 * @Author: luoxue
 * @Date: 2023-02-28 10:24:19
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 10:38:15
 * @FilePath: \3. TypeScript\12.class\access.ts
 * @Description: 访问控制修饰符
 */
/* 
TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。

  1. public（默认） : 公有，可以在任何地方被访问。
  2. protected : 受保护，可以被其自身以及其子类访问。
  3. private : 私有，只能被其定义所在的类访问
*/

class Encapsulate {
  str1:string = 'hello'
  protected str2:string = 'there'
  private str3:string = 'world'
  private eat() {
    console.log(this.str3); // private修饰的属性只能在类的内部被访问到
  }
}

var obj = new Encapsulate()
console.log(obj.str1);
// console.log(obj.str2); // 报错，属性“str2”受保护，只能在类“Encapsulate”及其子类中访问
// console.log(obj.str3) // 报错，属性“str3”为私有属性，只能在类“Encapsulate”中访问

class Child extends Encapsulate{
  doWork() {
    console.log('父类的 protected 属性：'+this.str2);
  }
}
 