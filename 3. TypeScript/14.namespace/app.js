/*
 * @Author: luoxue
 * @Date: 2023-02-28 13:41:24
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 13:44:59
 * @FilePath: \3. TypeScript\14.namespace\Circle.ts
 * @Description:
 */
/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
/*
 * @Author: luoxue
 * @Date: 2023-02-28 13:43:24
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 13:43:30
 * @FilePath: \3. TypeScript\14.namespace\Triangle.ts
 * @Description:
 */
/// <reference path="IShape.ts" />
var Drawing;
(function (Drawing) {
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("Triangle is drawn");
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
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
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
