//super原理分析

class User {
  name="user"
  show() {
    console.log('user.show')
  }
}

class Admin extends User {
  constructor(){
    super()
    super.show()//!这里可以执行，这个super代表父类实例化出的对象
    
  }
  show() {
    super.show() //*这时候调用了User里的show方法  super就访问了父级类
    super()//!会报错  super()只能在constructor里执行
  console.log(super.__proto__)//显示出来的是User.prototype，说明super是父类实例化出的对象444444
    console.log(this)
    console.log("admin.show")
  }
}

console.dir(Admin)
let hd = new Admin()
hd.show()
console.log(hd)
//hd.__proto__.show===Admin.prototype.show
//Admin.prototype.__proto__.show ===User.prototype.show



// //分析
// let hd = {
//   show() {
//     console.log(this)
//     console.log('hd.show')
//   }
// }
// //两个都是对象，使用__proto__来继承
// let xj = {
//   __proto__: hd,//!__proto__这个属性是对象就能修改，不是对象是改不了的
//   show() {//*这个show是方法，方法里的this都是指向自己
//     // this.show()//想调用父级的show，这样写就是在调用自己，死循环了
//     // this.__proto__.show()//结果好像是对的,这时候方法里的this是指向父级的，而我只是想用父级的方法，this还是要指向我本身,所以要改变this指向，用call
//     this.__proto__.show.call(this)
//     console.log('xj.show')
//   }
// }


// //使用class  super来调用父级的方法

// class User {
//   show() {
//     console.log(this.name)
//   }
// }

// class Admin extends User {
//   constructor(name) {
//     super()
//     this.name = name

//   }
//   show() {
//     super.show() //发现可以直接打印出Admin new出来的对象的name,而不是父类的name，比上面的使用更方便，super直接调用父级的方法，且不会改变this指向
//     console.log("admin.show")
//   }
// }

// console.dir(Admin)
// let hd = new Admin()
// hd.show()