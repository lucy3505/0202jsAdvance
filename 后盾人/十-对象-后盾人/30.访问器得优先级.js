//使用访问器控制属性和使用原始属性控制属性的冲突情况
//?

"use strict"
const user = {
    name:"houdunren",
    age:10,
    set name(value){
        console.log(value + '-后盾人')
    }
}
user.name="hdcms"//?又适合普通属性又适合访问器，哪个优先级高
//!发现访问器的优先级高于普通的操作方式
console.log(user)//hdcms-后盾人

//所以想保存的话可以把name变为一个私有属性

const DATA = Symbol()
const user = {
    data:{name},
    age:10,
  /*   set name(value){
        this.name = value
    }
    get name(){
        return this.name
    } 
    *会形成反复调用  因为取得时候是this.name.设置的时候去get里面又是this.name
    */
    set name(value){
        this.data.name = value
    }
    get name(){
        return this.data.name
    } 
}
user.name="hdcms"
console.log(user.name)//发现data也能获取得到
user.data.name = "nihao"
//?怎么解决
//可以在外部设置一个常量DATA，是个Symbol类型,唯一得
const DATA = Symbol()
console.log(Symbol()===Symbol())//false
const user = {
    [DATA]:{name},//
    age:10,

    set name(value){
        this[DATA].name = value//设置用Symbol,读取也用Symbol
    }
    get name(){
        return this[DATA].name
    } 

}
user.name = "hdcms"
user.data.name="nihao"//报错
console.log(user.name)
console.log(user)//*发现里面只有name,age两个属性，没有symbol属性，symbol是唯一得  后期使用模块化更简单点
console.log(user[Symbol().name])//报错，没有symbol