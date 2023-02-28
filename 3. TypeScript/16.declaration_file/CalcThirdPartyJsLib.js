/*
 * @Author: luoxue
 * @Date: 2023-02-28 14:50:47
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-28 14:50:51
 * @FilePath: \3. TypeScript\16.declaration_file\CalcThirdPartyJsLib.js
 * @Description: 定义一个第三方库
 */
var Runoob;
(function (Runoob) {
  var Calc = function () {
    function Calc() {}
  };
  Calc.prototype.doSum = function (limit) {
    var sum = 0;

    for (var i = 0; i <= limit; i++) {
      sum = sum + i;
    }
    return sum;
  };
  Runoob.Calc = Calc;
  return Calc;
})(Runoob || (Runoob = {}));
var test = new Runoob.Calc();
