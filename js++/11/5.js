function Car(brand, color) {
  this.brand = brand;
  this.color = color;
}

var nerCar = { placement: "2.0" };
// Car.call(mewCar,"benz","blue")
Car.apply(newCar, ["benz", "red"]);

console.log(newCar);

var car = new Car("mazda", "yellow");
console.log(car);
