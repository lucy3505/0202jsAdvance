var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

//要求：编写一个程序将数组扁平化后的数组去重，最终得到一个升序且不重复的一维数组
// 1.扁平化=>一维数组  多维数组
//2数组元素去重

//扁平化:方法一
// function flatten(arr) {
//   var _arr = arr || [],
//     FArr = [];

//   for (var i = 0; i < _arr.length; i++) {
//     item = _arr[i];
//     if (isArr(item)) {
//       FArr = FArr.concat(flatten(item));
//     } else {
//       FArr.push(item);
//     }
//   }
//   return FArr;
//   function isArr(arr) {
//     return {}.toString.call(arr) === "[object Array]";
//   }
// }
// const res = flatten(arr);
// console.log(res);

//方法二
// Array.prototype.flatten = function () {
//   var _arr = this,
//     toStr = {}.toString;
//   if (toStr.call(_arr) !== "[object Array]") {
//     throw new Error("只有数组才能调用flatten方法");
//   }
//   // var fArr = [];
//   // _arr.forEach((item) => {//能用forEach肯定能用reduce
//   //   toStr.call(tiem) === "[object Array]"
//   //     ? (fArr = fArr.concat(flatten(item)))
//   //     : fArr.push(item);
//   // });
//   // return fArr;

//   return _arr.reduce((pre, item) => {
//     return pre.concat(
//       toStr.call(item) === "[object Array]" ? item.flatten() : item
//     );
//   }, []);
// };
// console.log(arr.flatten());

//简写
const flatten = (arr) =>
  arr.reduce(
    (pre, item) =>
      pre.concat(
        {}.toString.call(item) === "[object Array]" ? flatten(item) : item
      ),
    []
  );
console.log(flatten(arr));
console.log(Array.from(new Set(arr.flat(Infinity))).sort(compare));
function compare(a, b) {
  return a - b;
}
