"use strict";
/*
 * @Author: luoxue
 * @Date: 2023-02-28 09:51:35
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 10:16:38
 * @FilePath: \3. TypeScript\12.class\inherite.ts
 * @Description:
 */
/*
子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。

TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）。
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* === 1. 继承单个类 === */
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log('圆的面积：' + this.Area);
    };
    return Circle;
}(Shape));
var obj = new Circle(223);
obj.disp(); // 圆的面积：223
console.log('obj.Area:', obj.Area);
/* === 2. 多重继承 === */
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child));
var obj2 = new Leaf();
obj2.str = 'hello';
console.log(obj2.str); // 'hello'
/* === 3. 继承类的方法重写 === */
/*
类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。
*/
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("父类的 doPrint() 方法。");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        // 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。
        _super.prototype.doPrint.call(this); // // 调用父类的函数
        console.log("子类的 doPrint()方法。");
    };
    return StringPrinter;
}(PrinterClass));
var obj3 = new StringPrinter();
obj3.doPrint(); // "父类的 doPrint() 方法。" '子类的 doPrint()方法。'
