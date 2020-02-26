//this
//函数中this使用的状态
//^对象中的函数一般叫方法，类方法
let obj = {
    name: '后盾人',
    show: function () {
        return obj.name
    }
};

console.log(obj.show())//‘后盾嗯’
// 把obj名字改成hd,就会报错
//要把return obj.name改成hd.name,可以使用this关键字，好处是obj可以随便变
//*!this就指的是当前对象的引用

//全局中有个对象window
console.log(window)
console.log(this)
console.log(this == window)//true
console.log(this == obj)//false

//在类方法里，show 这个this//*定义
//在show这个方法里面，所以这个this就是当前这个obj对象
//因为这个函数是我这个对象的一个属性，所以这时候的this就是我当前的这个对象Obj
let obj = {
    name: '后盾人',
    show: function () {
        console.log(this)
        return obj.name
    }
};
console.log(obj.show())
//但是如果我在show这个函数里再写一个方法

name = "这是window的name"
let obj = {
    name: '后盾人',
    show: function () {//!这个函数属于对象属性的，所以称为方法
        function render() {//!这个就是个普通函数
            console.log(this)//this:window
            console.log(this.name)//会打印出window的name
        }
        render()
        console.log(this)
        return obj.name
    }
};

//!如果这个函数是我们的对象属性或类方法，这时候的this就是当前对象，如果只是函数，this就是window
//?怎么把函数里的this指向对象Obj?很多方法




function User() {
    this.name = name
    this.show = function () {
        return this.name
    }
}
let lisi = new User('lisi')
console.log(lisi.show())//这是window的name
//要像下面这么写
function User(name) {
    this.name = name
    this.show = function () {
        return this.name
    }
}
let lisi = new User('lisi')
console.log(lisi.show())//这时候lisi

//*总得来说，不管你是用构造函数还是字面量得形式，都是创建出一个对象，如果属性得值是个函数得话我们称为方法，在方法里面写this得话就指当前得对象。如果不是方法，而是函数（没赋值给属性），那么this就指window