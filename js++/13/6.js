//instanceof
//判断这个对象是不是这个函数构造出来的

function Car() {}

var car = new Car();
function Person() {}
var p = new Person();

console.log(car instanceof Car);
console.log(car instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Object);

//A对象的原型里到底有没有B的原型
