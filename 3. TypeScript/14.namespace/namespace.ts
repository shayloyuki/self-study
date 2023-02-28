/*
 * @Author: luoxue
 * @Date: 2023-02-28 11:26:32
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 11:26:37
 * @FilePath: \3. TypeScript\14.namespace\namespace.ts
 * @Description: 
 */
/* 
命名空间一个最明确的目的就是解决重名问题。

假设这样一种情况，当一个班上有两个名叫小明的学生时，为了明确区分它们，我们在使用名字之外，不得不使用一些额外的信息，比如他们的姓（王小明，李小明），或者他们父母的名字等等。

命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的。这样，在一个新的名字空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他名字空间中。
*/

/* 
namespace SomeNameSpaceName { 
   export interface ISomeInterfaceName {      }  
   export class SomeClassName {      }  
}

以上定义了一个命名空间 SomeNameSpaceName，如果我们需要在外部可以调用 SomeNameSpaceName 中的类和接口，则需要在类和接口添加 export 关键字。
*/

/* 
要在另外一个命名空间调用语法格式为：
SomeNameSpaceName.SomeClassName;
*/

/* 
如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它，语法格式如下：
/// <reference path = "SomeFileName.ts" />
*/