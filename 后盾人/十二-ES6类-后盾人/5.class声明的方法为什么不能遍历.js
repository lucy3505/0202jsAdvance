//看个细节:类中声明的函数,属性不会被遍历。遍历的时候不大喜欢遍历到原型中的方法，所以class把方法都设置成不能遍历
function Hd() { }
Hd.prototype.show = function () { }
console.dir(Hd)
console.log(Object.getOwnPropertyDescriptor(Hd.prototype, "show", null, 2))
let h = new Hd()


for (const key in h) {
  console.log(key)
}
for (const key in h) { //*不使用类的时候，如果 不要遍历父级上的属性就需要使用hasOwnProperty
  if (h.hasOwnProperty(key)) {
    console.log(key)

  }
}

class User {
  constructor(name) {
    this.name = name
  }
  show() { }
}
let u = new User('xiangjun')
console.dir(User)
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(User.prototype, "show", null, 2)))
for (const key in u) {
  console.log(key) //只得到name,不会有show这个父类方法
}