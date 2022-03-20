//实例化之前与实例化之后的__proto__

Car.prototype = { name: "Benz" };
//没有了constructor  new出来的car以后就找不到Car

function Car() {}

var car = new Car();

Car.prototype = { name: "Mazada" };
console.log(car);
