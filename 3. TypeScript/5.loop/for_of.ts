/*
 * @Author: luoxue
 * @Date: 2023-02-24 15:55:04
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 15:59:22
 * @FilePath: \3. TypeScript\5.loop\for_of.ts
 * @Description: 
 */
// 在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。
// for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等

// 1. ES6 的 for_of
let someArr = [1, "string", false]
for (let entry of someArr) {
  console.log(entry); // 1, "string", false
}

// 2. ts 也支持 forEach, every, some
// 因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。

let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
});

let list2 = [4, 5, 6];
list2.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
});
export{}