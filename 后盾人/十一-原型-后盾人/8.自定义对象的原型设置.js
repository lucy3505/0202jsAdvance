// 为对象设置原型有多种方式
let hd = {name:'hd'}
let parent = {name:'parent',show(){
    console.log('parent method'+ this.name)//this始终是调用的对象
}}
console.log((hd.__proto__==Object.prototype))
//*设置原型
Object.setPrototypeOf(hd,parent)//设置hd的原型（__proto__）为parent
console.log(hd)
hd.show()//自己没有就去找parent
parent.show()
//*查看原型得方法
console.log(Object.getPrototypeOf(hd))
console.log(Object.getPrototypeOf(hd)==hd.__proto__)//true
