// 年龄为多少岁姓名为XX买了一辆排量为XX的什么颜色的什么牌子的车;
function Car(carOpt) {
  const { color, brand, placement } = carOpt;
  this.color = color;
  this.brand = brand;
  this.placement = placement;
}

function Person({ name, age, carOpt }) {
  Car.call(this, carOpt);
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(`${this.name}买了${this.brand}的车`);
  };
}

var p = new Person({
  name: "xx",
  age: "12",
  carOpt: { color: "blue", brand: "benz", placement: 2000 },
});
p.say();
