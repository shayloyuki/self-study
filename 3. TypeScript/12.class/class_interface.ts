/*
 * @Author: luoxue
 * @Date: 2023-02-28 10:41:24
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 11:01:43
 * @FilePath: \3. TypeScript\12.class\class_interface.ts
 * @Description: 类和接口
 */
// 类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。

/* === 例1 === */
// 接口
interface ILoan {
  interest: number
}

// 类
class AgriLoan implements ILoan {
  interest: number
  rebate: number

  constructor(interest:number, rebate:number) {
    this.interest = interest
    this.rebate = rebate
  }
}

var obj = new AgriLoan(10, 1)
console.log("利润为 : "+obj.interest+"，抽成为 : "+obj.rebate ) // 利润为 : 10，抽成为 : 1

/* === 例2 === */

// function print(obj): void {
//   console.log(obj.getContent()); // ts有类型检查的，必须要确保obj中存在getContent方法才能让print函数正常工作不报错。
// }
// var a:any
// print(a)






// class Article {
//   getContent():string {
//     return 'I am an article.'
//   }
// }

// // 缺点：print 函数只能打印 Article 类的对象
// function print(obj:Article):void {
//   console.log(obj.getContent());
// }

// let b = new Article()
// print(b) // I am an article.





// 使用接口：声明一个getContent方法，这样一来，每个实现该接口的类都必须实现getContent方法

// 接口
interface ContentInterface {
  getContent():string
}

// 类
class Article implements ContentInterface {
  getContent(): string {
    return 'I am an article.'
  }
}

class Passage implements ContentInterface {
  // 但实现方式可以不同
  getContent(): string {
    return 'I am a passage.'
  }
}

function print(obj:ContentInterface):void {
  console.log(obj.getContent());
}

let m = new Article()
let n = new Passage()

print(m) // 'I am an article.'
print(n) // 'I am a passage.'


export{}