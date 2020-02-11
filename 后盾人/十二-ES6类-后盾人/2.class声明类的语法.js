//声明一个类
class User{

}
console.log(typeof User) //function
let Hd = class {}
console.log(Hd)//class {}
//类的内部就是属性和方法

class User{
    show(){}//类里面这么写方法
    get(){console.log("houdunren ")}
}
let hd={
    show(){},
    get(){}
}
let xj = new User()
console.log(xj)
xj.get()

function Article(title){
    this.title = title
}
let a = new Article('houdunren')
console.log(a.title)
//*使用类传参
class  User{
    constructor(name){//!使用这个特殊函数来传参，向下成这个函数会自动执行
    //做参数的初始化
    this.name = name

    }
    getName(){//在类里面，这种函数叫方法
        return this.name
    }
}

let hd = new User('houdunren ')
console.log(hd.name)
let xj = new User("xiangjun")
console.log(xj.name)