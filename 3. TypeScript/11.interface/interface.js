"use strict";
/*
 * @Author: luoxue
 * @Date: 2023-02-27 17:13:12
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 17:20:32
 * @FilePath: \3. TypeScript\11.interface\interface.ts
 * @Description:
 */
/*
接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

interface interface_name {
}
*/
exports.__esModule = true;
var customer = {
    firstName: 'Lily',
    lastName: 'Gray',
    sayHi: function () { return "Hi there"; }
};
console.log("Customer 对象 ");
console.log(customer.firstName); // 'Lily',
console.log(customer.lastName); // 'Gray'
console.log(customer.sayHi()); // "Hi there"
// commandline 是字符串
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
// commandline 是字符串数组
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
// commandline 是一个函数表达式
options = { program: "test1", commandline: function () { return "**Hello World**"; } };
var fn = options.commandline;
console.log(fn());
