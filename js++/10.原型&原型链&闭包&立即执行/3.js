//实例化之前与实例化之后的__proto__

Car.prototype.name = "Benz"; //Car.prototype里面是有constructor的  指向了Car

function Car() {}

var car = new Car();
//car.__proto__指向Car.prototype   ={name:'Benze',constructor:Car}
Car.prototype = { name: "Mazada" };
console.log(car.name);
car.name = "11";
console.log(car);
car.__proto__.constructor.prototype = { name: "Mazada" };

//car.__proto__.constructor指向Car.prototype
