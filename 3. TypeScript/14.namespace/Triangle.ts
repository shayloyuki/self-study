/*
 * @Author: luoxue
 * @Date: 2023-02-28 13:43:24
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 13:43:30
 * @FilePath: \3. TypeScript\14.namespace\Triangle.ts
 * @Description: 
 */
/// <reference path="IShape.ts" />
namespace Drawing {
  export class Triangle implements IShape {
    public draw() {
      console.log("Triangle is drawn");
    }
  }
}