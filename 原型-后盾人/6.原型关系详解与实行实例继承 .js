/*
自己创建的函数在作为构造函数和普通对象时使用的场景

系统中有许多自带的构造函数：String,Number,Object
 */
 let hd = new Object()
 hd.name ='后盾人'
 console.dir(Object)
 Object.prototype.show = function(){
     console.log('houdunren.com')
 }
 hd.show()
 function User(){}
 console.dir(User)//包含prototype和__prototype__两个属性
 /* 
    Object也和User类型
    ?User.__proto__和User.prototype也是都个对象，这个对象也一定会有父级,那这两个对象的父级是谁呢
    我们从Object来分析
    User的prototype下有__proto__，__proto__里面有show这个方法，说明User.prototype的原型是Object.prototype
    User下的__proto__里面有show这个方法，说明User.__proto__是Obect.prototype

    User.prototype.__proto__==Object.prototype
    User.__proto__==Object.prototype
 
  */
  console.log(User.prototype.__proto__===Object.prototype)//true
  console.log(User.__proto__==Object.prototype)//false
  console.dir(User.__proto__)
//   Object.__proto__是只服务于自己了，当Object做为静态调用的时候只服务于自己，和User的道理是一样的
console.dir(Object.prototype.__proto__)//null  顶级原型了

let xj = new User()
xj.show()
User.show()