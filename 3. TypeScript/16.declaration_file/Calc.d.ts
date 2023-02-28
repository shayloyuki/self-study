/*
 * @Author: luoxue
 * @Date: 2023-02-28 14:52:19
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 14:57:52
 * @FilePath: \3. TypeScript\16.declaration_file\Calc.d.ts
 * @Description: 声明文件 Calc.d.ts
 */
// 声明文件不包含实现，它只是类型声明
declare module Runoob {
  export class Calc {
    doSum(limit:number) : number
  }
}