/*
 * @Author: luoxue
 * @Date: 2023-02-27 17:04:07
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 17:12:28
 * @FilePath: \3. TypeScript\10.unions\unions.ts
 * @Description: 
 */
/* 
联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。

注意：只能赋值指定的类型，如果赋值其它类型就会报错
*/

var val:string|number
val = 12
val = 'hello'
// val = ['1','2'] // 报错

/* 也可以将联合类型作为函数参数使用 */
function disp(name:string|string[]) {
  if (typeof name == 'string') {
    console.log(name);
  } else if (name instanceof Array) {
    name.forEach(ele => console.log(ele))
  }
}

disp('runoob')
disp(["Google","Taobao","Facebook"])
export{}