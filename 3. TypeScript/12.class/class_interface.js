"use strict";
/*
 * @Author: luoxue
 * @Date: 2023-02-28 10:41:24
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 11:01:43
 * @FilePath: \3. TypeScript\12.class\class_interface.ts
 * @Description: 类和接口
 */
// 类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
exports.__esModule = true;
// 类
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj = new AgriLoan(10, 1);
console.log("利润为 : " + obj.interest + "，抽成为 : " + obj.rebate); // 利润为 : 10，抽成为 : 1
// 类
var Article = /** @class */ (function () {
    function Article() {
    }
    Article.prototype.getContent = function () {
        return 'I am an article.';
    };
    return Article;
}());
var Passage = /** @class */ (function () {
    function Passage() {
    }
    // 但实现方式可以不同
    Passage.prototype.getContent = function () {
        return 'I am a passage.';
    };
    return Passage;
}());
function print(obj) {
    console.log(obj.getContent());
}
var m = new Article();
var n = new Passage();
print(m);
print(n);
