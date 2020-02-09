//^方法二：通过构造函数来创建对象

function User(name){
    this.name = name
    this.show = function(){
        console.log(this.name)
    }
    // return this //*正常系统会自己return this
    // return {}  //如果写了return {},下面得xj就会得到{}
}
let xj = new User('xiangjun')//new关键字会产生一个新得对象，不用new得话，普通函数this就指向了window
console.log(xj)

//构造函数中得this指得是当前调用函数得对象

//!
let func = xj.show;
func()//作用普通函数调用这个show，show里面得this就指向window
//*如果用了use strict  this就是undefined