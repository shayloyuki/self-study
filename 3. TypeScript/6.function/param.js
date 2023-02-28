"use strict";
/*
 * @Author: luoxue
 * @Date: 2023-02-24 16:20:42
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 10:23:13
 * @FilePath: \3. TypeScript\6.function\param.js
 * @Description:
 */
exports.__esModule = true;
// 1. === 带参数 ===
/*
function func_name( param1 [:datatype], param2 [:datatype]) {
}
*/
function add(x, y) {
  return x + y;
}
console.log(add(1, 2)); // 3

// 2. === 可选参数? ===
// 注意：可选参数必须跟在必需参数后面，如果都是可选参数就没关系
// 如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？。
function buildName(firstName, lastName) {
  return firstName + " " + lastName;
}
// let result1 = buildName("Bob");                  // 错误，缺少参数
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
var result3 = buildName("Bob", "Adams"); // 正确
//  正确做法：
function buildName2(firstName, lastName) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
var res1 = buildName2("Bob"); // 正确
// let res2 = buildName2("Bob", "Adams", "Sr.");  // 错误，参数太多了
var res3 = buildName2("Bob", "Adams"); // 正确

// 3. === 默认参数 ===
// 注意：参数不能同时设置为可选和默认
/*
function function_name(param1[:type],param2[:type] = default_value) {
}
*/
function calc(price, rate) {
  if (rate === void 0) {
    rate = 0.5;
  }
  return price * rate;
}
console.log(calc(1000)); // 500
console.log(calc(1000, 0.3)); // 300

// 4. === 剩余参数 ===
// ...restOfName:string[] 指的由剩余参数（多个字符串参数）构成的数组
function combineName(firstName) {
  var restOfName = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    restOfName[_i - 1] = arguments[_i];
  }
  // arr.join() 默认把数组转为由逗号分隔的字符串
  return firstName + " " + restOfName.join(" ");
}
var yourName = combineName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(yourName); // 'Joseph Samuel Lucas MacKinzie'
function addNum() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  var i;
  var sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log("和为：", sum);
}
addNum(1, 2, 3);
