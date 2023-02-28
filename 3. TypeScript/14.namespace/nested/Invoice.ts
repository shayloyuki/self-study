/*
 * @Author: luoxue
 * @Date: 2023-02-28 14:01:39
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 14:02:48
 * @FilePath: \3. TypeScript\14.namespace\nested\Invoice.ts
 * @Description: 
 */

/* 命名空间支持嵌套，即你可以将命名空间定义在另外一个命名空间里头。 */
namespace Runoob {
  export namespace invoiceApp {
    export class Invoice {
      public calculateDiscount(price:number) {
        return price * .40
      }
    }
  }
}