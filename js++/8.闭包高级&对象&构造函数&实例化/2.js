// 写一个车的函数，可设置车的品牌，颜色，排量
// 再写一个构造消费者的函数，设置用户的名字，年龄，收入，通过选择的方法实例化该用户喜欢的车，在设置车的属性

function Car({ brand, color, displacement }) {
  this.brand = brand || "";
  this.color = color || "";
  this.displacement = displacement || "";
}

function Customer({ name, age, income }) {
  this.name = name;
  this.age = age;
  this.income = income;
  this.select = function (obj) {
    const car = new Car(obj);
    console.log(car);
    return car;
  };
}

const customer = new Customer({ name: "lucy", age: 22, income: "2200" });
customer.select({ brand: "benz" });
