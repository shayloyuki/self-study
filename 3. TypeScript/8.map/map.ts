/*
 * @Author: luoxue
 * @Date: 2023-02-27 14:03:55
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 16:38:24
 * @FilePath: \3. TypeScript\8.map\create.ts
 * @Description: 
 */
/* 
Map 对象保存键值对，并且能够记住键的原始插入顺序。

任何值(对象或者原始值) 都可以作为一个键或一个值。

Map 是 ES6 中引入的一种新的数据结构，可以参考 ES6 Map 与 Set。
*/

// 创建 map
// let myMap = new Map();

/* 
let myMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"]
    ]); 
*/

/* 
Map 相关的函数与属性：

map.clear() – 移除 Map 对象的所有键/值对 。
map.set() – 设置键值对，返回该 Map 对象。
map.get() – 返回键对应的值，如果不存在，则返回 undefined。
map.has() – 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
map.delete() – 删除 Map 中的元素，删除成功返回 true，失败返回 false。
map.size – 返回 Map 对象键/值对的数量。
map.keys() - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
map.values() – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。
*/

let myFirstMap = new Map()

myFirstMap.set(1, 'run')
myFirstMap.set('watch', 2)
myFirstMap.set(['a', 'b'], 3)

console.log(myFirstMap.get(1)); // 'run'
// console.log(myFirstMap.get(2)); // undefined // get(key) 得到 value

console.log(myFirstMap.has(1)); // true
// console.log(myFirstMap.has(3)); // false // has(key)

console.log(myFirstMap.size); // 3

// myFirstMap.delete('watch')

// myFirstMap.clear()

console.log(myFirstMap); // Map(3) { 1 => 'run', 'watch' => 2, [ 'a', 'b' ] => 3 }

/* 对于迭代，使用 tsc create.ts --downlevelIteration */

for (let key of myFirstMap.keys()) {
  console.log('迭代 key:', key);
  /* 
  迭代 key: 1
  迭代 key: watch
  迭代 key: [ 'a', 'b' ]
  */
}

for (let value of myFirstMap.values()) {
  console.log('迭代 value:', value);
  /* 
  迭代 value: run
  迭代 value: 2
  迭代 value: 3
  */
}

for (let entry of myFirstMap.entries()) {
  console.log('迭代 key => value:', entry[0], entry[1]);
  /* 
  迭代 key => value: 1 run
  迭代 key => value: watch 2
  迭代 key => value: [ 'a', 'b' ] 3
  */
}

for (let [key, value] of myFirstMap) {
  console.log('使用对象解析:', key, value);
/* 
  使用对象解析: 1 run
  使用对象解析: watch 2
  使用对象解析: [ 'a', 'b' ] 3
*/
}
export{}