//prototype主要是定义了构造函数的原型，作用是：通过这个构造函数创建的对象都能使用这个原型里的属性
//为单个对象更改原型
let user = {
  show() {
    return this.name
  }
}
//*1定义对象的原型 --- 这个只能用来定义对象原型，不能获取
let hd = Object.create(user)//hd的原型变为user对象
hd.name = "houdunren"
// hd.__proto__ = user 
hd.show()//houdunren 
//2  .__proto__
let hd = {}
//*__proto__有值的时候是设置，没值的时候就是获取
hd.__proto__ = user//设置
console.log(hd.__proto__)//获取原型
