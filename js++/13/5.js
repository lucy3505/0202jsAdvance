function Cat() {
  this.brand = "benz";
  this.color = "red";
}

Cat.prototype = {
  displacement: "3.0",
};

var car = new Cat();
console.log(car);
//in会查到原型链
console.log("displacement" in car);
