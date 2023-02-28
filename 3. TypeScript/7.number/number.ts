/*
 * @Author: luoxue
 * @Date: 2023-02-27 13:17:30
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 13:26:10
 * @FilePath: \3. TypeScript\7.number\number.ts
 * @Description: 
 */
/* 1. Number 对象属性 */
console.log("TypeScript Number 属性: "); 
console.log("最大值为: " + Number.MAX_VALUE); // 最大值为: 1.7976931348623157e+308
console.log("最小值为: " + Number.MIN_VALUE); // 最小值为: 5e-324
console.log("负无穷大: " + Number.NEGATIVE_INFINITY); // 负无穷大: -Infinity
console.log("正无穷大:" + Number.POSITIVE_INFINITY);// 正无穷大:Infinity
export{}

/* 2. NaN 实例 */
var month = 0
if (month <= 0 || month >= 12) {
  month = Number.NaN
  console.log('月份是：' + month); // NaN
} else {
  console.log("输入月份数值正确。");
}

/* 3. prototype 实例 */
function employee (id: number, name: string):void {
  this.id = id
  this.name = name
}

var emp = new employee(123, 'admin')
employee.prototype.email = 'admin@runoob.com'

console.log("员工号: "+emp.id) // 员工号: 123
console.log("员工姓名: "+emp.name) // 员工姓名: admin
console.log("员工邮箱: "+emp.email) // 员工邮箱: admin@runoob.com