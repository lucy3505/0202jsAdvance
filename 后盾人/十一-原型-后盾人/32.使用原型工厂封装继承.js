//封装继承
Object.defineProperty(Admin.prototype, "constructor", {
  value: Admin,
  enumerable: false
})

function User() {

}
User.prototype.show=function(){
  console.log(this.name)
}
function Admin(name) {
  this.name = name
}
// Admin.prototyp = Object.create(User.prototype)
function extend(Son, Parent) {
  Son.prototype = Object.create(Parent.prototype)
  Object.defineProperty(Son.prototype,"constructor",{
    value:Son,
    enumerable:false
  })
}
extend(Admin,User)
let xj = new Admin('xj')
console.log(xj)

