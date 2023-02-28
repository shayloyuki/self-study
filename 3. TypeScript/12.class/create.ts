/*
 * @Author: luoxue
 * @Date: 2023-02-28 09:40:53
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 09:46:30
 * @FilePath: \3. TypeScript\12.class\create.ts
 * @Description: 
 */
/* 
class class_name { 
    // 类作用域
}

定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：
  1. 字段 − 字段是类里面声明的变量。字段表示对象的有关数据。
  2. 构造函数 − 类实例化时调用，可以为类的对象分配内存。
  3. 方法 − 方法为对象要执行的操作。
*/

/* === 1. 创建一个 Person 类 === */
class Person {

}

/* === 2. 创建类的数据成员 === */
class Car {
  // 字段 
  engine: string;
  // 构造函数 
  // this 关键字表示当前类实例化的对象
  constructor(engine:string) {
    this.engine = engine
  }
  // 方法
  disp():void {
    console.log("发动机为 :   "+this.engine)
  }
}

/* === 3. 创建实例化对象 === */
// 创建一个对象
var obj = new Car('Engine1')

// 访问字段
console.log("读取发动机型号 :  "+obj.engine)  
 
// 访问方法
obj.disp()

export{}