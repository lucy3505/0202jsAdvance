

//7
//*分配给构造函数的属性称为静态属性
//如果一个值要给所有对象使用就可以设置成静态属性，像后台的地址是不变的可以设置成静态属性，节约空间
//调用静态方法只能函数调用
class User {
  constructor(name) {
    this.name = name
  }
  static create(...args) {//相当于User.create
    console.log(this)//this指向User  this就是谁调用指向谁
    return new User(...args)
  }
}
console.dir(User)

//10
//属性访问器的时候

//11
//保护属性
//1,人为约定:_name

//12
//无法可以修改属性的方法
//``1.Symbol()
//``2.WeakMap()

// 14
//私有属性#

//15
//传统方法继承父类的属性:使用call
//class方式继承父类属性 
class User {
  constructor(name) {
    this.name = name
  }
}
class Admin {
  constructor(name) {
    super(name)
  }
}


//17
//!两个都是对象，使用__proto__来继承
let hd = {
  show() {
    console.log('hd.show')
  }
}
let xj = {
  __proto__: hd,//!__proto__这个属性是对象就能修改，不是对象是改不了的
  show() {
    console.log('xj.show')
  }
}
//super可直接调用父级里的方法，且不会改变this指向

//18
//*super只会原型攀升，而this仅代表当前调用的对象
//所以这就是super产生的必要性
//*super细节：只能show(){}这么调用，不可以show:function(){}  会报错，所以定义类的时候都是show(){}这么写

//19

/* //*Admin构造函数里不写constructor和super的时候默认等于下面：
 constructor(...args){
  super(...args)
}
默认调用了父级的属性
*/

class Admin extends User {
  constructor(...args) {
    super(...args)//*如果写的话super肯定是写在第一位，已经限制了，如果父类也有site这个属性，如果super写在this.site后面，那么父类的属性会覆盖子类的属性，这样是不合理的，子类的属性优先级应该高于父类，所以super如果写在this.site后面也是会报错的
    //this一定在super下面
    this.site = "ddd"
  }
}