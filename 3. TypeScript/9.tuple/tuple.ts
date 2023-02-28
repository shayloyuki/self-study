/*
 * @Author: luoxue
 * @Date: 2023-02-27 16:44:59
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 17:02:12
 * @FilePath: \3. TypeScript\9.tuple\tuple.ts
 * @Description: 
 */
/* 
数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。

元组中允许存储不同类型的元素，元组可以作为参数传递给函数。

元组的本质就是数组
*/

/* 1. 声明元组 */
var myTuple = [10, 'tuple']
// 或者
var mytuple:any[] = []; 
mytuple[0] = 120 
mytuple[1] = 234

/* 2. 访问元组 */
console.log(mytuple[0]); // 120

