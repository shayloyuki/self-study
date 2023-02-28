/*
 * @Author: luoxue
 * @Date: 2023-02-27 17:13:12
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 17:26:31
 * @FilePath: \3. TypeScript\11.interface\interface.ts
 * @Description: 
 */
/* 
接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

interface interface_name { 
}
*/

/* === 1. 定义接口 === */

// 需要注意接口不能转换为 JavaScript。 它只是 TypeScript 的一部分。

interface IPerson {
  firstName: string,
  lastName: string,
  sayHi: () => string
}

var customer:IPerson = {
  firstName: 'Lily',
  lastName: 'Gray',
  sayHi: ():string => "Hi there"
}

console.log("Customer 对象 ") 
console.log(customer.firstName) // 'Lily',
console.log(customer.lastName) // 'Gray'
console.log(customer.sayHi()) // "Hi there"

/* === 2. 在接口中使用联合类型 === */
interface RunOptions {
  program: string,
  commandline: string[] | string | (() => string)
}

// commandline 是字符串
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  // 'Hello'
 
// commandline 是字符串数组
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); // 'Hello'
console.log(options.commandline[1]);  // 'world'
 
// commandline 是一个函数表达式
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
var fn:any = options.commandline; 
console.log(fn());// "**Hello World**"

/* === 3. 接口和数组 === */
// 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。
// 设置元素为字符串类型：

interface nameList {
  [index:number]:string
}

var list1:nameList = ["Google","Runoob","Taobao"]
// var list2:nameList = ["Runoob",1,"Taobao"] // 报错

export{}