/*
 * @Author: luoxue
 * @Date: 2023-02-28 13:41:24
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 13:44:59
 * @FilePath: \3. TypeScript\14.namespace\Circle.ts
 * @Description: 
 */
/// <reference path = "IShape.ts" />
namespace Drawing {
  export class Circle implements IShape {
    public draw() {
      console.log("Circle is drawn");
    }
  }
}