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
 console.dir(User)