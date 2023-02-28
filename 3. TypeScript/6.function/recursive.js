"use strict";
exports.__esModule = true;
/*
 * @Author: luoxue
 * @Date: 2023-02-27 10:35:15
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 10:54:27
 * @FilePath: \3. TypeScript\6.function\recursive.ts
 * @Description:
 */
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(6));
