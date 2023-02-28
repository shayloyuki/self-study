"use strict";
/*
 * @Author: luoxue
 * @Date: 2023-02-27 14:03:55
 * @LastEditors: luoxue
 * @LastEditTime: 2023-02-27 16:38:24
 * @FilePath: \3. TypeScript\8.map\create.ts
 * @Description:
 */
/*
Map 对象保存键值对，并且能够记住键的原始插入顺序。

任何值(对象或者原始值) 都可以作为一个键或一个值。

Map 是 ES6 中引入的一种新的数据结构，可以参考 ES6 Map 与 Set。
*/
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
exports.__esModule = true;
// 创建 map
// let myMap = new Map();
/*
let myMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"]
    ]);
*/
/*
Map 相关的函数与属性：

map.clear() – 移除 Map 对象的所有键/值对 。
map.set() – 设置键值对，返回该 Map 对象。
map.get() – 返回键对应的值，如果不存在，则返回 undefined。
map.has() – 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
map.delete() – 删除 Map 中的元素，删除成功返回 true，失败返回 false。
map.size – 返回 Map 对象键/值对的数量。
map.keys() - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
map.values() – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。
*/
var myFirstMap = new Map();
myFirstMap.set(1, 'run');
myFirstMap.set('watch', 2);
myFirstMap.set(['a', 'b'], 3);
console.log(myFirstMap.get(1)); // 'run'
// console.log(myFirstMap.get(2)); // undefined // get(key) 得到 value
console.log(myFirstMap.has(1)); // true
// console.log(myFirstMap.has(3)); // false // has(key)
console.log(myFirstMap.size); // 3
// myFirstMap.delete('watch')
// myFirstMap.clear()
console.log(myFirstMap); // Map(3) { 1 => 'run', 'watch' => 2, [ 'a', 'b' ] => 3 }
try {
    /* 对于迭代，使用 tsc create.ts --downlevelIteration */
    for (var _e = __values(myFirstMap.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
        var key = _f.value;
        console.log('迭代 key:', key);
        /*
        迭代 key: 1
        迭代 key: watch
        迭代 key: [ 'a', 'b' ]
        */
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_f && !_f.done && (_a = _e["return"])) _a.call(_e);
    }
    finally { if (e_1) throw e_1.error; }
}
try {
    for (var _g = __values(myFirstMap.values()), _h = _g.next(); !_h.done; _h = _g.next()) {
        var value = _h.value;
        console.log('迭代 value:', value);
        /*
        迭代 value: run
        迭代 value: 2
        迭代 value: 3
        */
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_h && !_h.done && (_b = _g["return"])) _b.call(_g);
    }
    finally { if (e_2) throw e_2.error; }
}
try {
    for (var _j = __values(myFirstMap.entries()), _k = _j.next(); !_k.done; _k = _j.next()) {
        var entry = _k.value;
        console.log('迭代 key => value:', entry[0], entry[1]);
        /*
        迭代 key => value: 1 run
        迭代 key => value: watch 2
        迭代 key => value: [ 'a', 'b' ] 3
        */
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_k && !_k.done && (_c = _j["return"])) _c.call(_j);
    }
    finally { if (e_3) throw e_3.error; }
}
try {
    for (var myFirstMap_1 = __values(myFirstMap), myFirstMap_1_1 = myFirstMap_1.next(); !myFirstMap_1_1.done; myFirstMap_1_1 = myFirstMap_1.next()) {
        var _l = __read(myFirstMap_1_1.value, 2), key = _l[0], value = _l[1];
        console.log('使用对象解析:', key, value);
        /*
          使用对象解析: 1 run
          使用对象解析: watch 2
          使用对象解析: [ 'a', 'b' ] 3
        */
    }
}
catch (e_4_1) { e_4 = { error: e_4_1 }; }
finally {
    try {
        if (myFirstMap_1_1 && !myFirstMap_1_1.done && (_d = myFirstMap_1["return"])) _d.call(myFirstMap_1);
    }
    finally { if (e_4) throw e_4.error; }
}
