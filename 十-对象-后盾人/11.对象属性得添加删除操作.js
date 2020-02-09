//属性一些基本的概念
let hd = {}
hd.name = "houdunren "
//中括号也可以，只不过里面放的是字符串,不写字符串会认为是变量
hd["age"]  = 18
console.log(hd)
//删除属性
delete hd.name
console.log(hd)

//检测属性
console.log(hd.hasOwnProperty('age'))//检测的是当前对象有没有这个属性，而不是原型链上