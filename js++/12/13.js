class Hd {
  static show() {
    console.log("show");
  }
}
console.dir(Hd);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static create(...args) {
    return new this(...args);
  }
}
const u = new User("xiangjun", 12);

const a = User.create("xiangjun", 13);
console.log(a);
