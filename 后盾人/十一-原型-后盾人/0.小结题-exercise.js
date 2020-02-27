
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


//?题目:一个数组求最大值方法，用sort  一个对象求最大值，借用这个数组求最大值方法
let hd = {
    data: [1, 2, 3, 4, 5]
}
let xj = {
    lessons: { js: 87, php: 66, Linux: 22, node: 99 }
}
console.log(hd.data.sort((a, b) => b - a)[0])

