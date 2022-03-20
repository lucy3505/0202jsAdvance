function Hd() {}
Hd.prototype.show = function () {
  console.log(11);
};
var h = new Hd();
h.a = "a";
for (var i in h) {
  console.log(i); //会找原型上的属性
}

console.log(Object.getOwnPropertyDescriptor(Hd.prototype, "constructor")); //false

class User {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log("ss");
  }
}
const s = new User();

for (var i in s) {
  console.log(i); //不会找原型上的方法
}
