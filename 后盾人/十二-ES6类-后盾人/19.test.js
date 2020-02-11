



class User {
  constructor(name) {
    this.name = name
  }
  show() {
    console.log('User.show')
  }
}
class Admin extends User {
  constructor() {
    super()//不写super会报错，必须是super(),不能是super.show()
    // super.show()  
    this.site = "ddd"
  }
}
let hd = new Admin('houdun')
console.log(hd)//{name: undefined, site: "ddd"}

