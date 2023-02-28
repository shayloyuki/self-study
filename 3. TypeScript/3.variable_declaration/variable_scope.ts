/*
 * @Author: luoxue
 * @Date: 2023-02-24 13:30:37
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 14:47:09
 * @FilePath: \3. TypeScript\3.variable_declaration\variable_scope.ts
 * @Description: 
 */
var global_num = 12
class Numbers {
  num_val = 13
  static sval = 10

  storeNum(): void {
    var local_num = 14
  }
}

console.log('全局变量：', global_num); // 12
console.log('静态变量：', Numbers.sval); // 10
// console.log('实例变量',  Numbers.num_val); // 报错，类型“typeof Numbers”上不存在属性“num_val”

var obj = new Numbers()
console.log('实例变量', obj.num_val); // 13

// console.log(local_num); // 报错 找不到名称“local_num”

export {};