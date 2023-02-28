/*
 * @Author: luoxue
 * @Date: 2023-02-28 13:44:36
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 13:47:56
 * @FilePath: \3. TypeScript\14.namespace\TestShape.ts
 * @Description: 
 */
/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
/// <reference path = "Triangle.ts" />
function drawAllShapes(shape:Drawing.IShape) {
  shape.draw()
}

drawAllShapes(new Drawing.Circle()) // Circle is drawn
drawAllShapes(new Drawing.Triangle()) // Triangle is drawn