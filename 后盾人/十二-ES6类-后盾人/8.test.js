// class User {
//   static show() {
//     console.log('show')
//   }
// }
// console.dir(User)

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  static create(...args) {
    console.log(args)
    console.log(...args)
    return new User(...args)
  }
}

let xj = User.create('xiangjun')