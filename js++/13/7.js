var a = [] || {};
console.log(a.constructor);
console.log(a instanceof Array);
var str = Object.prototype.toString.call(a);

console.log(str);
if (str === "[object Array]") {
  console.log("是数组");
} else {
  console.log("不是数组");
}
Object.prototype = {
  toString: function () {
    a.toString();
  },
};

var arr = new Array(1, 2, 3);

console.log(arr);
console.log(arr.toString());
