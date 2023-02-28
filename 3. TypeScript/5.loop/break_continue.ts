/*
 * @Author: luoxue
 * @Date: 2023-02-24 16:01:19
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 16:13:44
 * @FilePath: \3. TypeScript\5.loop\break_continue.ts
 * @Description: 
 */
// 1. break: 终止整个循环

var i:number = 1
while(i < 10) {
  if (i % 5 === 0) {
    console.log("在 1~10 之间第一个被 5 整除的数为 : ", i);
    break
  }
  i++
}
// 输出：在 1~10 之间第一个被 5 整除的数为 : 5


// 2. continue：跳过本次循环，继续下一次循环

var num:number = 0
var count:number = 0

for(num = 0; num <= 20; num++) {
  if (num % 2 === 0) {
    continue
  }
  count++
}
console.log("0 ~20 之间的奇数个数为: ", count); // 10

export{}