

"user strict"
const user = {
    name:'houxunren',
    age:18
}
//``封闭对象接口：不能往对象添加属性，不能删除属性，也不能重新定义属性特征
Object.seal(user)
user.name="houdunren1" //*属性的值可以更改
//看对象的特征
console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user),null,2))//里面属性的配置变为了false
//* {"name":{
//     "value":"houdunren",
//     "writable":true,
//     "enumerable":true,
//     "configurable":false
// }}


user.site = "houdunren.com"//*报错，添加属性也不可以  使用了use strict才报错

delete user.name //报错
//也无法对属性进行定义  defineProperty

//``对对象进行判断，时候在封闭状态
if(!Object.isSealed(user)){
    user.site = "houduren.com"
    delete user.name
}

//*当需要对对象进行保护，就可以使用Object.Seal()
