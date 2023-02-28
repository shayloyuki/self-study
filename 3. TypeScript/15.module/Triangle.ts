/*
 * @Author: luoxue
 * @Date: 2023-02-28 14:22:25
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 14:23:59
 * @FilePath: \3. TypeScript\15.module\Triangle.ts
 * @Description: 
 */
// import shape = require('./IShape')// 报错，面向 ECMAScript 模块时，不能使用导入分配。请考虑改用 "import * as ns from "mod""、"import {a} from "mod""、"import d from "mod"" 或另一种模块格式。
import * as shape from './IShape'
export class Triangle implements shape.IShape {
  public draw() {
    console.log("Triangle is drawn (external module)"); 
  }
}