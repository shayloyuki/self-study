/*
 * @Author: luoxue
 * @Date: 2023-02-24 15:51:10
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 15:53:28
 * @FilePath: \3. TypeScript\5.loop\for_in.ts
 * @Description: 
 */
/* 
for (var val in list) { 
    //语句 
}

注意：val 需要为 string 或 any 类型。
*/

// 遍历 n
var j:any
var n:any = 'a b c'

for(j in n) {
  console.log(n[j]); // a b c
}
export{}