/*
 * @Author: luoxue
 * @Date: 2023-02-28 14:01:39
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 14:02:48
 * @FilePath: \3. TypeScript\14.namespace\nested\Invoice.ts
 * @Description:
 */
/* 命名空间支持嵌套，即你可以将命名空间定义在另外一个命名空间里头。 */
var Runoob;
(function (Runoob) {
    var invoiceApp;
    (function (invoiceApp) {
        var Invoice = /** @class */ (function () {
            function Invoice() {
            }
            Invoice.prototype.calculateDiscount = function (price) {
                return price * .40;
            };
            return Invoice;
        }());
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = Runoob.invoiceApp || (Runoob.invoiceApp = {}));
})(Runoob || (Runoob = {}));
/*
 * @Author: luoxue
 * @Date: 2023-02-28 14:00:46
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 14:04:30
 * @FilePath: \3. TypeScript\14.namespace\nested\InvoiceTest.ts
 * @Description:
 */
/// <reference path = "Invoice.ts" />
// 成员的访问使用点号 . 来实现
var invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));
