/*
 * @Author: luoxue
 * @Date: 2023-02-24 16:16:27
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-24 16:19:45
 * @FilePath: \3. TypeScript\6.function\return_type.ts
 * @Description: 
 */
/* 
function function_name():return_type { 
    // 语句
    return value; 
}
*/

function greet():string {
  return 'Hello'
}

function caller() {
  var msg = greet()
  console.log(msg);
}

caller() // 'Hello'
export{}