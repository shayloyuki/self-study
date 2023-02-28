/*
 * @Author: luoxue
 * @Date: 2023-02-28 11:17:27
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 11:22:36
 * @FilePath: \3. TypeScript\13.object\class_template.ts
 * @Description: 
 */
// var sites = { 
//   site1:"Runoob", 
//   site2:"Google" 
// };

// sites.sayHello = function(){ return "hello";} // 报错，类型“{ site1: string; site2: string; }”上不存在属性“sayHello”。

var sites = {
  site1: "Runoob",
  site2: "Google",
  sayHello: function () { } // 类型模板
};

sites.sayHello = function() {
  console.log("hello " + sites.site1);
}
sites.sayHello() // hello Runoob



/* === 对象也可以作为一个参数传递给函数 === */

var sites2 = { 
  site1:"Runoob", 
  site2:"Google",
};

var invokeSites2 = function(obj: {site1:string, site2:string}) {
  console.log("site1 :"+obj.site1) 
  console.log("site2 :"+obj.site2) 
}

invokeSites2(sites2) // site1 :Runoob site2 :Google

export{}