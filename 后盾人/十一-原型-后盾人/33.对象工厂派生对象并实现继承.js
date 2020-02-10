//另一种实现继承的方式
//之前的对象都是通过构造函数创建的 new
//对象也可以通过下面的方式创建
let xj = {}
let  a = Object.create({})

//*下面使用对象工厂来创建
function User(name,age){
    this.name = name
    this.age = age
}
User.prototype.show=function(){
    console.log(this.name,this.age)
}

function admin(name,age) {//这样就直接把这个对象创建出来
//    const instance = Object.create(User.prototype)
const instance = {}
instance.__proto__=User.prototype

   User.call(instance,name,age)
   instance.role = function(){//直接给对象加方法,这样通过这个函数创建的对象都会有一个这样的对象
       console.log('role')
   }
   return instance
}
let hd = admin('xiangjun',18)
console.log(hd)
hd.show()