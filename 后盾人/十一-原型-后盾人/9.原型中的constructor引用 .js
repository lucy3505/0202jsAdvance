
function User(name){
    this.name = name
}
console.dir(User)
console.log(User.prototype.__proto__==Object.prototype)
//``不止可以通过prototype找到构造函数的原型，也可以通过prototype找到构造函数

console.log(User.prototype.constructor == User)//true
//其实prototype和__proto__都是原型
//new 出来无数个对象就使用prototype原型，自己本身的话就是用__proto__这个原型，prototype强一点，可以作用于无数个对象，所以我们会在prototype里面加功能


//下面这个方法并没有改变prototype这个对象，只是往prototype这个对象追加了方法
// User.prototype.show=function(){
//     console.log(this.name)
// }

//想加多个方法，这么写的时候
//!这时候把prototype指向改变了，原本的prototype是有constructor的，这时候你把prototype这个对象变成新对象，你最好是把它的constructor给它，保持原样，否则下面的new User.prototype.constructor('李四')就会报错，找不到constructor,我们希望通过原型也能找到构造函数，//*好处是我们通过这个对象能找到构造函数来生成新对象
//^解决这个问题就是把它的constructor属性给它添上，原来是谁还是谁
User.prototype = {
    constructor:User,
    show(){
        console.log(this.name)
    }
}
let lisi = new User.prototype.constructor('李四')

//可以通过lisi这个对象找到prototype,然后用Prototype找到constructor来创建对象
console.log(lisi)
lisi.show()



console.log(User)