//这种情况不用，用得少
let xj = {name:'xj'}
console.log(xj)
console.log(xj.hasOwnProperty("name"))
//*hasOwnProperty这个方法是__proto__上面的，所以可以用

//!完全数字字典对象，只有数据，没有原型的关系存在，这种用的少
let hd = Object.create(null,{
    name:{
        value:"houdunren "
    }
})//第一个参数是指定它的父亲，也就是__proto__
console.log(hd)
console.log(hd.hasOwnProperty("name"))
//*报错，因为没有它的原型（__proto__）为null,没有方法hasOwnProperty