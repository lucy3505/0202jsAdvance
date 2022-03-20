//hasOwnProperty  判断属性的
//排除你原型上自定义的属性  __proto__上的属性

var obj = {
  name: "ai",
  age: 32,
};

console.log(obj.hasOwnProperty(obj.name)); //false
function Car() {
  this.brand = "Benz";
  this.color = "red";
  this.displacement = "3.0";
}

Car.prototype = {
  lang: 5,
  width: 2.6,
};

var car = new Car();
for (var key in car) {
  console.log(key + ":" + car[key]);
  if (car.hasOwnProperty(key)) {
    console.log(car[key]);
  }
}
