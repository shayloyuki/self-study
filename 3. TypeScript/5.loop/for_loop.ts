/*
 * @Author: luoxue
 * @Date: 2023-02-24 15:14:54
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 15:50:53
 * @FilePath: \3. TypeScript\5.loop\for_loop.ts
 * @Description: 
 */
/* 
for ( init; condition; increment ){
    statement(s);
}

1. init 会首先被执行，且只会执行一次。这一步允许您声明并初始化任何循环控制变量。您也可以不在这里写任何语句，只要有一个分号出现即可。
2.接下来，会判断 condition。如果为 true，则执行循环主体。如果为 false，则不执行循环主体，且控制流会跳转到紧接着 for 循环的下一条语句。
3.在执行完 for 循环主体后，控制流会跳回上面的 increment 语句。该语句允许您更新循环控制变量。该语句可以留空，只要在条件后有一个分号出现即可。
4.条件再次被判断。如果为 true，则执行循环，这个过程会不断重复（循环主体，然后增加步值，再然后重新判断条件）。在条件变为 false 时，for 循环终止
*/

var num:number = 5
var i:number
var factorial = 1 // 阶乘

for(i = num; i >= 1; i--) {
  factorial *= i
}

console.log(factorial); // 120
export{}
