//this在原型中的体现：this和原型没关系，始终指向调用属性的对象
let hd = {
  name: 'houduanren',
  // show(){
  //   console.log(this.name)
  // }
}
Object.setPrototypeOf(hd, {})//改变了原型链
console.log(hd.show())//this也是没变，指向调用属性的对象

let User = {
  name: "xj",
  show() {
    console.log(this.name)
  }
}
Object.setPrototypeOf(hd, User)
console.log(hd)
console.log(hd.show())//还是打印houdunren 