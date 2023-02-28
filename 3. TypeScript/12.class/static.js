/*
 * @Author: luoxue
 * @Date: 2023-02-28 10:15:24
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 10:19:29
 * @FilePath: \3. TypeScript\12.class\static.ts
 * @Description:
 */
/*
static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
*/
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12;
StaticMem.disp();
