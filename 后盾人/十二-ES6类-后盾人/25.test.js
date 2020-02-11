//继承内置类  使用一些内置类的功能扩展成一些新的类
//先用构造函数来实现
function Arr(...args) {
  args.forEach(item => this.push(item))//继承了就能使用push了，不继承就不能使用
  this.first = function () {
    return this[0]
  }
  this.max = function () {
    return this.sort((a, b) => b - a)[0]
  }

}
Arr.prototype = Object.create(Array.prototype)
console.dir(Arr)
let hd = new Arr(1, 2, 3, 4, 3, 33, 7, 6)
console.log(hd)//!输出什么？
console.log(hd.first())
console.log(hd.max())
