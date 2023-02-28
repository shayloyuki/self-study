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
var invoice = new Runoob.invoiceApp.Invoice()
console.log(invoice.calculateDiscount(500)); // 200