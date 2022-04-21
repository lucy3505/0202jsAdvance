var arr = [1, 1, 2, 3, 6, 8, 95, 3, 5, 7, 9, 6];

//for 循环  第一种：这种比第二种速度快点
// function uniqueAr(arr) {
//   var _arr = [];
//   for (var i = 0; i < arr.length; i++) {
//     let isRepeat = false;

//     for (var j = 0; j < _arr.length; j++) {
//       if (_arr[j] === arr[i]) {
//         isRepeat = true;
//         break;
//       }
//     }
//     if (!isRepeat) {
//       _arr.push(arr[i]);
//     }
//   }
//   return _arr;
// }
// const res = uniqueAr(arr);
// console.log(res);

//for 循环  第二种
// function uniqueAr(arr) {
//   var _arr = [];
//   for (var i = 0; i < arr.length; i++) {
//     let isRepeat = false;

//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[j] === arr[i]) {
//         isRepeat = true;
//         break;
//       }
//     }
//     if (!isRepeat) {
//       _arr.push(arr[i]);
//     }
//   }
//   return _arr;
// }
// const res = uniqueAr(arr);
// console.log(res);

//for 循环  第三种 filter
// function uniqueAr(arr) {
//   return arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
// }
// const res = uniqueAr(arr);
// console.log(res);

//for 循环  第四种 forEach
// function uniqueAr(arr) {
//   var _arr = [];
//   arr.forEach((item, index) => {
//     if (_arr.indexOf(item) === -1) {
//       _arr.push(item);
//     }
//   });
//   return _arr;
// }
// const res = uniqueAr(arr);
// console.log(res);

//for 循环  第五种 forEach sort
// function uniqueAr(arr) {
//   var _arr = [];
//   arr.sort();
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       // if(arr[i]!==_arr[_arr.length])
//       _arr.push(arr[i]);
//     }
//   }
//   return _arr;
// }
// const res = uniqueAr(arr);
// console.log(res);

//for 循环  第六种 forEach
/**function uniqueAr(arr) {
  var _arr = [];

  arr.forEach((item) => {
    if (!_arr.includes(item)) {
      _arr.push(item);
    }
  });
  return _arr;
}
const res = uniqueAr(arr);
console.log(res); */

//indexOf 和Includes的区别：
/**
 * array.indexOf(item)  -1  index  具体位置  NAN 无效
 * array.includes(item)  true  false
 */

//for 循环  第七种 sort reduce
// function uniqueAr(arr) {
//   return arr.sort().reduce((prev, item) => {
//     if (prev.length === 0 || prev[prev.length - 1] !== item) {
//       prev.push(item);
//     }
//     return prev;
//   }, []);
// }
// const res = uniqueAr(arr);
// console.log(res);

//for 循环  第八种 Map
//Map比普通对象好在哪里：Map的键名可以是对象，普通的只能是字符串
//{a:1,b:2}:{c:3,d:5}
// function uniqueAr(arr) {
//   var _arr = [],
//     _temp = new Map();
//     // _temp = new Object() ;  用Object也可以
//   for (var i = 0; i < arr.length; i++) {
//     if (!_temp.get(arr[i])) {
//       _temp.set(arr[i], 1);
//       _arr.push(arr[i]);
//     }
//   }
//   return _arr;
// }
// const res = uniqueAr(arr);
// console.log(res);

//set  new Set不是数组 是一种set的数据结构  知识类似数组
function uniqueAr(arr) {
  return Array.from(new Set(arr));
}

const res = uniqueAr(arr);
console.log(res);
