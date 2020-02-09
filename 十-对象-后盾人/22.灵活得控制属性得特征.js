const user = {
    name:'湘军',
    age:18
}
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user,"age"),null,2))


//设置属性特征
Object.defineProperty(user,'name',{ //有新增属性的功能，不单纯就是修改属性，如果name属性有就修改，没有就新增
    value:'后盾人',
    writable:false,//限制属性是否可修改
    enumerable:true,//Object.keys(user)
    configurable:false  //*不能被删除也不能被配置，就是这里设置了false,那么后边对这个name属性无法再使用Object.defineProperty(user,'name'{})取修改其他属性值，是单向的

})
console.log(user.name)
user.name="xiangjun"//writable：false  修改无法成功  如果使用use strict就会报错
console.log(Object.keys(user))//enumerable:false  则name就看不到了 for in 也看不到了

//^批量设置属性特征
Object.defineProperties(user,{
    name:{
         value:'后盾人',
        writable:false,
        enumerable:true,
        configurable:false  
    },
    age:{
        value:'后盾人',
        writable:false,
        enumerable:true,
        configurable:false 
    }
})