
//2里面  解释下面这段话得含义
let hd = Object.create(null, {
    name: {
        value: "houdunren "
    }
})
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
//?给我一个对象生成新得对象
function User(name) {
    this.name = name
    this.show = function () {
        console.log(this.name)
    }
}
let hd = new User("后盾人")
function createByObject(obj, ...args) {

}

const lisi = createByObject('lisi')

//13
//?in和hasOwnPropery是检测什么的且有什么区别

//15
//?如果某个原型链中没有这个功能，借用别的原型链上的功能,可以使用什么方法

//?题目:一个数组求最大值方法，用sort  一个对象求最大值，借用这个数组求最大值方法

let hd = {
    data: [1, 2, 3, 4, 5]
}
let xj = {
    lessons: { js: 87, php: 66, Linux: 22, node: 99 }
}

//17
///?用数组的filter过滤DOM有class这个属性的节点  hasAttribute('class'）

//21
//?为单个对象更改原型的方法

//31
//?要给Admin和Member都设置名称，年纪等用户信息，在每个构造函数里都写this.name = name,this.age = age不合适，User有这个属性赋值的信息，如何调用获取User函数
function User(name, age) {
    this.age = age
    this.name = name
}

//32
//?封装继承