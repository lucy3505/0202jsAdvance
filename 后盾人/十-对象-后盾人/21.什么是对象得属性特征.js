//可以对属性进行设置，或删除
const user = {
    name:'湘军',
    age:18
}
user.lesson = "js" //设置属性的值
console.log(user)
delete user.lesson//删除属性
console.log(user)
//但是无法对属性进行设置，使它不能被修改，不能 被删除，不能被遍历，更细的控制

let arr = ['houdunren','hdcms']
console.log(arr) //会发现里面有三个元素，还有个length，但遍历的时候发现无法遍历出length
for(let [k,v] of Object.entries(arr)){
    console.log(k,v) //打印不出length
}

//?对属性进行控制，使其保护起来不被修改
//打印出name属性的特征，获取某一个属性的特征
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user,'name'),null,2))
{
    'value':'湘军',//属性的值
    'writable':true,//属性是否可写，说明属性可被修改
    'enumerable':true//可遍历
    "configurable":true//是否可删除或重新配置
}
//获取一个对象所有属性特征
console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user),null,2))
{"name":{
    'value':'湘军',//属性的值
    'writable':true,//属性是否可写，说明属性可被修改
    'enumerable':true//可遍历
    "configurable":true//是否可删除或重新配置
},"age":{
    'value':'18',//属性的值
    'writable':true,//属性是否可写，说明属性可被修改
    'enumerable':true//可遍历
    "configurable":true//是否可删除或重新配置
}}
