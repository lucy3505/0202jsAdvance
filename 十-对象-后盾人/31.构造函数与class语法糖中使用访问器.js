//构造函数中使用访问器还有使用属性特征来定义访问器

"use strict"
function User(name,age){
    this.name = name,
    this.age = age
}
let xj = new User("湘军",19)

xj.name="xiangjun"
console.log(xj)
//创建出来得xj对象可以随意更改属性,不想要让它得属性可以随意更改，这时候可以使用访问器得形式

function User2(name,age){
    // this.name = name,
    // this.age = age,
    let data={name,age}
    Object.defineProperties(this,{
        name:{
            get(){return data.name},//通过闭包可以访问到外部得data
            set(value){
                if(value.trim()!==""||value.length>20){
                    throw new Error('非法姓名')
                }
                data.name = value
            }
        },
        age:{
            get(){return data.age},
            set(value){data.age = value}
        }
    })
}
xj.name="xiangjun"

//^使用语法糖类的方法进行定义
class User3{
    constructor(name,age){
        this.data = {name,age}
    }
    get name(){
        return this.data.name
    }
    set name(value){
        if(value.trim()!==""||value.length>20){
                    throw new Error('非法姓名')
                }
                this.data.name = value
    }
}
let xj3 = new User3()
console.log(xj3)//?可以看出data这个属性，如果要隐藏这个属性呢
//^可以在外部定义个symbol类型的值

const DATA = Symbol()
class User3{
    constructor(name,age){
        this[DATA] = {name,age}
    }
    get name(){
        return this[DATA].name
    }
    set name(value){
        if(value.trim()!==""||value.length>20){
                    throw new Error('非法姓名')
                }
                this[DATA].name = value
    }
}
let xj3 = new User3()
console.log(xj3)//这时候就没有data这个属性