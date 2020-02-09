//*对象的代理,访问器只是对单个属性进行控制，对象代理是对整个对象进行控制

//不直接操控数据，通过代理来访问数据
"use strict"
const hd = {name:'houdunren '}
const proxy = new Proxy(hd,{ //hd为要代理的对象
    get(obj,property){
        console.log(property)
        return obj[property]
    },
    set(obj,property,value){
        obj[property ] = value
        return true
    }
})

console.log(proxy.name)
proxy.name="xiangjun"
console.log(proxy.name)
console.log(proxy)//获取整个对象的属性