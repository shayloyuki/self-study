/*
 * @Author: luoxue
 * @Date: 2023-02-28 14:24:09
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 14:30:33
 * @FilePath: \3. TypeScript\15.module\TestShape.ts
 * @Description: 
 */
import * as shape from './IShape'
import * as circle from './Circle'
import * as triangle from './Triangle'

function drawAllShapes(shapeToDraw: shape.IShape) {
  shapeToDraw.draw()
}

drawAllShapes(new circle.Circle()) // Cirlce is drawn (external module)
drawAllShapes(new triangle.Triangle()) // Triangle is drawn (external module)

// 使用 tsc 命令编译以上代码（Commonjs）
// tsc --module commonjs TestShape.ts
// node TestShape.js