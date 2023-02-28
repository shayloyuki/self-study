/*
 * @Author: luoxue
 * @Date: 2023-02-27 11:08:47
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 13:15:22
 * @FilePath: \3. TypeScript\6.function\overload.ts
 * @Description:
 */
/* 
函数重载：
重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

1. 参数类型不同
2. 参数数量不同
3. 参数类型顺序不同

如果参数类型不同，则参数类型应设置为 any。

参数数量不同你可以将不同的参数设置为可选。
*/

// === 例1 ===
// 定义重载签名：重载签名定义函数的形参和返回类型，没有函数体。一个函数可以有多个重载签名(不可调用)
function disp(s1:string):void;
function disp(n1:number,s1:string):void;

// 定义实现签名
function disp(x:any,y?:any):void {
  console.log(x); 
  console.log(y); 
}

disp("abc") // abc undefined
disp(1,"xyz"); // 1 'xyz'


// === 例2 ===
let suits = ["hearts", "spades", "clubs", "diamonds"]


function greet(person: string): string;
// person: string[] 表示字符串构成的数组
function greet(person: string[]): string[]

function greet(person:any):any {
  if (typeof person === 'string') {
    // 字符串
    return `Hello, ${person} is a string`
  // } else if (person instanceof Array) {
  } else if (Array.isArray(person)) {
    // 数组
    return person.map(name => `Hello, ${name}`)
  }
}

console.log(greet(suits[0])); // 'Hello, hearts is a string'
console.log(greet(suits)); // [ 'Hello, hearts', 'Hello, spades', 'Hello, clubs', 'Hello, diamonds' ]

export{}