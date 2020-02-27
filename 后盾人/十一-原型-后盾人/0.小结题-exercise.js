
// //2里面  解释下面这段话得含义
// let hd = Object.create(null, {
//     name: {
//         value: "houdunren "
//     }
// })
// //?下面输出什么
// console.log(hd.hasOwnPropery("name"))

// //?为对象设置原型得方法? //8、
// Object.setPrototypeOf(hd,parent)//!设置hd的原型为parent
// //?查看原型得方法
// let hd = { name: 'hd' }
// let parent = {
//     name: 'parent',
//     show() {
//         console.log('parent method' + this.name)
//     }
// }
// // hd.__proto__=parent
// Object.setPrototypeOf(hd, parent)
// //查看原型
// console.log(Object.getPrototypeOf(hd))

// //9.
// // //?构造函数通过prototype找到原型，构造函数通过prototype找到构造函数


// //9.
// //?给我一个对象生成新得对象
// function User(name) {
//     this.name = name,
//         this.show = function () {
//             console.log(this.name)
//         }
// }
// let hd = new User('后盾人')
// console.log(hd)
// createByObject(obj, ...args){
//     var Constructor = Object.getPrototypeOf(obj).constructor


//     return new Constructor(...args)
// }

// //? in和hasOwnPropery是检测什么的且有什么区别
// 都是检测对象上的属性，但是in把原型链上的属性都检测了
// for(const p  in obj){
//     if(obj.hasOwnProperty(p)){
//         const el = obj[p]
//     }
// }


// //?题目:一个数组求最大值方法，用sort  一个对象求最大值，借用这个数组求最大值方法
// let hd = {
//     data: [1, 2, 3, 4, 5]
// }
// let xj = {
//     lessons: { js: 87, php: 66, Linux: 22, node: 99 }
// }
// // xj.constprototype.sort=function(){

// // }
// // console.log(hd.data.sort((a, b) => b - a)[0])
// // const arr = xj.sort.call(Object.values(xj.lessons), (a, b) => b - a)
// // console.log(arr[0])

// // Object.setPrototypeOf(hd, {
// //     max() {
// //         return this.data.sort((a, b) => b - a)
// //     }
// // })
// console.log(hd)
// console.log(hd.__proto__)

// //?为单个对象更改原型的方法


function User() {
    // this.name = function(){
    //   console.log("user name")
    // }//方法要放到prototype 节约内存
}
User.prototype.name = function () {
    console.log('user name')
}

let hd = new User()
console.log(hd)

function Admin() {
    //想用name方法
}
//   1)Admin.prototype = User.prototype //改变了构造函数原型
//   2）Member.prototype = User.prototype
// 这时候如果Admin要拥有自己原型方法就不行了，所以应该是构造函数原型的继承
//   Admin.prototype.__proto__= User.prototype
// Admin.prototype = Object.create(User.prototype)//这是创造一个空对象。create的第一个参数为这个空对象的原型，如果第二个参数传了对象也可以，如果不传就默认空对象，但是空对象的话应该要有constructor,只能自己去指定
// Admin.prototype.constructor = Admin
// //但是时候的constructor为可遍历的
// //   那么使用 for(var i in obj) construcor就会遍历出constructor,只能换种方式压入
// console.log(Admin.prototype)
// // console.log(Admin.prototype.__proto__)
// console.log(Object.getOwnPropertyDescriptor(Admin.prototype))
// for (var i in Admin.prototype) {
//     console.log(i)
// }
Admin.prototype.__proto__ = User.prototype//用这个方法就不会打印出constructor 但不标准，用defineProperty，但麻烦
for (var i in Admin.prototype) {
    console.log(i)
}
// Object.definePropertie(Admin.prototype, "constructor", {
//     value: Admin,
//     enumerable: false
// })