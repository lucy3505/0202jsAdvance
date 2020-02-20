//18.构造函数创建对象的方法
let xj = {
  name: 'xiangjun',
  show() {
    console.log(this.name)
  }
}
let hd = {
  name: 'houdun',
  show() {
    console.log(this.name)
  }
}

//一类对象往往处理得动作一样
//?修改一个show内容，就要重复修改几个对象相同得内容，如何改变？
function Factory(name) {

  this.name = name;
  this.show = function () {
    console.log(this.name)
  }
}

let xj = new Factory('xiangjun')

//new三件事：生成新对象，改变this指向，this指向这个新创建的对象，把这个新对象的原型指向构造函数的原型(prototype)
//用工厂函数创建的新对象，没法找到构造函数