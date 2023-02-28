"use strict";
exports.__esModule = true;
/*
 * @Author: luoxue
 * @Date: 2023-02-24 10:28:36
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 10:36:33
 * @FilePath: \3. TypeScript\2.basic_types\any.ts
 * @Description:
 */
// 1. 变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查
var x = 1;
x = 'I am who I am';
x = false;
// 2. 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查
// let p: any = 4
// p.ifItExists() // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
// p.toFixed() // 正确
// 3. 定义存储各种类型数据的数组时
var arrList = [1, false, 'fine'];
arrList[1] = 100;
console.log(arrList); // [ 1, 100, 'fine' ]
