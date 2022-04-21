//3.获取对象的可扩展性 [[isExtensible]]

var obj = { a: 1, b: 2 };
var extensible = Object.isExtensible(obj);
console.log(extensible); //true

// Object.freeze(obj); //false
// var extensible2 = Object.isExtensible(obj);
// console.log(extensible2);

// Object.seal(obj); //封闭对象
// obj.c = 3; //不可修改
// console.log(obj);

// delete obj.a; //不可删除
// console.log(obj);

// obj.b = 3; //可写
// console.log(obj);

// for (var key in obj) {
//   //可读
//   console.log(obj[key]);
// }

Object.freeze(obj); //封闭对象
obj.c = 3; //不可修改
console.log(obj);

delete obj.a; //不可删除
console.log(obj);

obj.b = 3; //不可写
console.log(obj);

for (var key in obj) {
  //可读
  console.log(obj[key]);
}
