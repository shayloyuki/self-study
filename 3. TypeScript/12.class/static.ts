/*
 * @Author: luoxue
 * @Date: 2023-02-28 10:15:24
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 10:20:59
 * @FilePath: \3. TypeScript\12.class\static.ts
 * @Description: 
 */
/* 
static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
*/

class StaticMem {
  area:number

  static num:number

  static disp():void {
    console.log("num 值为 "+ StaticMem.num);
  }
}

// 初始化静态变量
StaticMem.num = 12
// 调用静态方法
StaticMem.disp() // num 值为 12

// StaticMem.area // 报错，类型“typeof StaticMem”上不存在属性“area”。