//使用工厂或构造函数得价值：就是把对象得属性封装到构造函数得内部
let xj = {}
xj.name = "xiangjun"
xj.show = function (name) {
    console.log(name)
}
//上面的代码通过下面的函数封装
//对构造函数进行的抽象处理，要让外部访问就给属性加this，不想让外部访问的就用变量声明
function User(name, age) {
    //?属性怎么做抽象处理
    //^很简单，定义个data，把参数放入这个对象,下面用闭包的特性读取到这几个属性
    //?对方法进行抽象处理
    let info = function () {
        return data.age > 50 ? '老年' : '青年'
    }
    let data = { name, age }
    // this.name = name
    // this.age = age
    this.show = function () {
        console.log(data.name + info()) //?this.info()这个方法就是给内部使用的，不希望外部能修改  xj.info=..
    },
    // this.info=function(){
    //     return data.age>50?'老年':'青年'
    // }
}

let xj = new User('xiangjun')
//?现在把一些方法封装到了函数内部，这些方法外部一样可以访问
console.log(xj.show)
//有一些方法不希望外部能访问，比如不希望访问name,xj.name
//说明没做到抽象：把一些属性和方法封装在内部，不让外部访问，比如有个Info方法不希望外部能访问