

function User(name) {
  this.name = name
}
function Admin(...args) {
  User.apply(this, args)
}
//继承
Admin.prototype = Object.create(User.prototype)
let hd = new Admin('houdunren')
console.log(hd)


class User {
  constructor(name) {
    this.name = name
  }
}
class Admin extends User {
  constructor(...args) {
    super(...args)//*如果写的话super肯定是写在第一位，已经限制了，如果父类也有site这个属性，如果super写在this.site后面，那么父类的属性会覆盖子类的属性，这样是不合理的，子类的属性优先级应该高于父类，所以super如果写在this.site后面也是会报错的
    //this一定在super下面
    this.site = "ddd"
  }
}
let hd = new Admin('houdun')//产生出来也是不会报错的
/* //*Admin构造函数里不写constructor和super的时候默认等于下面：
 constructor(...args){
  super(...args)
}
默认调用了父级的属性
*/