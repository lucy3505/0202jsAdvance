//写js的时候最好都用严格模式
// 'use strict'
let { name, age } = { name: 'xiang', age: 23 }
console.log(name, age)
//如果不用let就会报错
//{name,age}={name:'xiang',age=23}
//另一种写法，放在()也可以，但严格模式下不可以
// （{name,age}={name:'xiang',age=23}）
//标准就是要声明符号