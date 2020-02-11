//类的原理  操作类的方式与原来操作原型的方式是一样的
//*类只是把原来我们定义构造函数的方式变得简化而已
class User{
    constructor(name){//给我们实例化出的对象做初始值的，可以new出来的对象赋予初始值
        this.name= name
    }
    show(){}//相当于prototype上的方法，等价于Hd.prototype.show=function(){}
}//*内部还是一个函数
console.log(tyoeof User)//function
console.dir(User)//结构和函数是一样的
console.log(User===User.prototype.constructor)//*true
function Hd(name){
    this.name = name//相当于class中contructor()
}
Hd.prototype.show=function(){}//原型上的方法给实例化对象用
console.dir(Hd)
console.log(Hd===Hd.prototype.constructor)//true
