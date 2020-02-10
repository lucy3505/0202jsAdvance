
//2里面  解释下面这段话得含义
let hd = Object.create(null, {
    name: {
        value: "houdunren "
    }
})//第一个参数是指定它的父亲，也就是__proto__,第二个参数就是设置这个对象自身有的属性，使用的是定义属性的方法来设置的
//?下面输出什么
console.log(hd.hasOwnPropery("name"))

//?为对象设置原型得方法? //8、
//?查看原型得方法
let hd = { name: 'hd' }
let parent = {
    name: 'parent',
    show() {
        console.log('parent method' + this.name)
    }
}
// hd.__proto__=parent
Object.setPrototypeOf(hd, parent)
//查看原型
console.log(Object.getPrototypeOf(hd))

//9.
//?构造函数通过prototype找到原型，构造函数通过prototype找到构造函数


//9.
//往prototype添加方法，只是用

//14
//?in和hasOwnPropery是检测什么的且有什么区别
//两个都是检测对象属性的，检查对象中是否有某个属性，in会检测到原型链，hasOwnProperty只检测自身
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];

    }
    //如果不加上面的hasOwnProperty，就会遍历出多条属性，至操作自己的话就要加上if
}

//15
//?如果某个原型链中没有这个功能，借用别的原型链上的功能,可以使用什么方法
//method.apply(obj,[])  method.call(obj,args)  call和apply都是立即执行
//15

let hd = {
    data: [1, 2, 3, 4, 5]
}
//求最大值
Object.setPrototypeOf(hd, {
    max() {
        return this.data.sort((a, b) => b - a)[0]
    }
})
console.log(hd.max())
let xj = {
    lessons: { js: 87, php: 66, Linux: 22, node: 99 },
    get data() { //因为有this.data 如果不要这个data数据呢
        return Object.values(lessons)
    }
}
hd.max.apply(xj)//
//!不要data数据，this.data本来是对象里的数据，不用this那就是函数传参，有this，函数就可以不要参数
Object.setPrototypeOf(hd, {
    max(data) {
        return data.sort((a, b) => b - a)[0]
    }
})
console.log(hd.max(hd.data))//使用传参的话，对象里就不限制一定要有什么属性
let xj = {
    lessons: { js: 87, php: 66, Linux: 22, node: 99 },
}
hd.max.apply(null, Object.values(xj.lessons))//apply的第一个参数是对象，this
//apply的this为null的话  写成函数调用就可以
hd.max(Object.values(xj.lessons))

//21，22
//?为单个对象更改原型的方法
/*
    1:只能设置原型
    let obj = Object.create(obj1)
    obj.__proto__ = obj1
    obj的原型变为obj1对象
    2：可以设置和获取原型的非标准用法
    obj.__proto__
     3：设置和获取原型的非标准用法
     Object.setPropertyOf(obj,objParent)
     Object.getPropertyOf(obj)



*/

//23
//?如果就要给__proto__设置不是对象的值呢？

//24
//*改变构造函数原型并不是继承
//*原型的继承，并不是改变构造函数的原型
// !直接改变构造函数的原型是不对的，这不是继承

// 25
//!再往上走一层，在构造函数原型上再继承
//!Object.create首先会创建新的对象，然后新的对象的原型指向User.prototype
//*原本Admin.prototype.__proto__和User.prototype.__proto__都指向指向Object.prototype
//Admin.prototype-->Object.prototype
//*执行Admin.prototype.__proto__ = User.prototype后
//Admin.prototype-->User.prototype-->Object.prototype
//Admin.prototype-->User.prototype-->obj-->Object.prototype
//Admin.prototype-->User.prototype-->Function-->fn-->Object.prototype
//obj1-->obj2-->obj3-->Object.prototype

//27
// 设置constructor不可遍历
Object.definePropertie(Admin.prototype, "constructor", {
    value: Admin,
    enumerable: false
})

//30
//JS中面向对象的多态实现

//31
//?要给Admin和Member都设置名称，年纪等用户信息，在每个构造函数里都写this.name = name,this.age = age不合适，User有这个属性赋值的信息，如何调用获取User函数
function User(name, age) {
    this.age = age
    this.name = name
}

//32
//?封装继承
