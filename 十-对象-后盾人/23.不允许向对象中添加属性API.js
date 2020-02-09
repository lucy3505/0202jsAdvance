"use strict"
const user = {
    name:'houxunren',
    age:18
}

//``禁止向对象中添加属性：静态方法  defineProperty是设置属性，不是对对象进行控制
Object.preventExtensions(user)
user.site = "houndunren.com"
console.log(user)
//``也提供了判断方法
if(Object.isExtensible(user)){
    user.site = "houdunren.com"
    console.log(user)
}