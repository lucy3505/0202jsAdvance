//属性的检测几种，一种是对象上的检测

let hd = {name:'xiangjun'}
let arr = ['houdunren.com']
console.log(arr) //里面有个length属性，这个属性是在数组这个对象上的

console.log(arr.hasOwnProperty('length'))//true //*只检测自己身上有没有这个属性
console.log(arr.hasOwnProperty('concat'))//false  父亲才有
//?要检测自己还有父亲上有没有这个属性
console.log('length' in arr) //true
console.log('concat' in arr) //true

let a = {
    name:'houdun'
}
let b = {
    url:'houdunren.com'
}
//?要把b对象设成a对象的父亲
Object.setPrototypeOf(a,b)
console.log(a)
console.log(a.hasOwnProperty('url'))
console.log('url' in a)
//^可以用来检测对方是否配置了这个属性
function oss(options){
    if(!options.hasOwnProperty('host')){
        throw new Error("必须设置主机地址")
    }
}
oss({user:'admin'})