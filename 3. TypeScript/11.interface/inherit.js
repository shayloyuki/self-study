"use strict";
/*
 * @Author: luoxue
 * @Date: 2023-02-27 17:26:47
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 17:41:51
 * @FilePath: \3. TypeScript\11.interface\inherit.ts
 * @Description:
 */
/*
接口继承就是说接口可以通过其他接口来扩展自己。

Typescript 允许接口继承多个接口。

继承使用关键字 extends。

// 单接口继承
Child_interface_name extends super_interface_name
// 多接口继承
Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name
*/
exports.__esModule = true;
// var drummer:Musician =  {
//   age: 27,
//   instrument: 'drums'
// }
// 或者
// 类型断言
// var drummer = <Musician>{}
var drummer = {};
drummer.age = 27;
drummer.instrument = 'drums';
console.log("年龄:  " + drummer.age); // '年龄:  27'
console.log("喜欢的乐器:  " + drummer.instrument); // '喜欢的乐器:  drums'
var Iobj = {
    v1: 12,
    v2: 23
};
console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2);
