//__proto__可以修改，constructor也可以修改
function Person() {}
Person.prototype.name = "zhangsan";
var p = new Person();
console.log(p.name);
p.__proto__ = { name: "lisi" };
console.log(p.name);
var p2 = new Person();

p2.__proto__.name = "wang5";
console.log(Person.prototype);
