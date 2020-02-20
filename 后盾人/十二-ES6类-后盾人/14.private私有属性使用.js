//公共属性public：类的内部外部都能访问类，包括子类
// 受保护的：类及其子类可以访问，外部不能访问
//私有属性：完全属于类的，子类和外部都不能访问  且不能改变

//私有属性# 

class User extends Common {
  #host = "hdcms.com"
  constructor(name) {
    super()
    this.name = name//把name也压到symbol里,只能在内部取，如果要让外部去，就定一个get name
    this.#check(name)//如果把check方法放到父类中就报错
  }
  get name() {
    return this.name
  }
  set host(url) {//想改私有属性就走访问器
    if (!/^https?:\/\//i.test(url)) {
      throw new Error('地址错误')
    }
    this.#host = url
  }
  // #check(){//私有方法,加#写成方法可能报错，给它改成属性写法
  //   if(this.name.length<5){
  //     throw new Error('名字不能小于5位')
  //   }
  //   return true
  // }
  #check = function () {//私有方法,加#写成方法可能报错，给它改成属性写法
    if (this.name.length < 5) {
      throw new Error('名字不能小于5位')
    }
    return true
  }
}

let hd = new User("houdunren")
hd.host = "hh.com"//public的时候是可以改的，加上#后就报错不能改
hd.check()//这个方法在外部也是能访问的