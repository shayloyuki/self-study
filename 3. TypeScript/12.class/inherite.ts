/*
 * @Author: luoxue
 * @Date: 2023-02-28 09:51:35
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 10:18:05
 * @FilePath: \3. TypeScript\12.class\inherite.ts
 * @Description: 
 */
/* 
子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。

TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）。
*/

/* === 1. 继承单个类 === */
class Shape {
  Area: number
  constructor(a:number) {
    this.Area = a
  }
}

class Circle extends Shape {
  disp():void {
    console.log('圆的面积：'+ this.Area);
  }
}

var obj = new Circle(223)
obj.disp() // 圆的面积：223



/* === 2. 多重继承 === */
class Root {
  str:string
}

class Child extends Root {}

class Leaf extends Child {}

var obj2 = new Leaf()
obj2.str = 'hello'
console.log(obj2.str); // 'hello'

/* === 3. 继承类的方法重写 === */
/* 
类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。
*/
class PrinterClass {
  doPrint():void {
    console.log("父类的 doPrint() 方法。");
  }
}

class StringPrinter extends PrinterClass {
  doPrint(): void {
    // 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。
    super.doPrint() // // 调用父类的函数
    console.log("子类的 doPrint()方法。");
  }
}

var obj3 = new StringPrinter()
obj3.doPrint() // "父类的 doPrint() 方法。" '子类的 doPrint()方法。'

/* === 4. === */
export{}