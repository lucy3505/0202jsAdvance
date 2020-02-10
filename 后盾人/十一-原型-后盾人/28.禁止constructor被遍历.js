

function Admin() { this.name = "name" }
Admin.prototype = Object.create(User.prototype)
Admin.prototype.constructor = Admin
console.log(Object.getOwnPropertyDescriptor(Admin.prototype))
//打印出来发现constructor的enumerable为true
Admin.prototype.role = function () {
  console.log('admin role')
}
let a = new Admin()
for (const key in a) {
  console.log(key)
}//发现constructor也被遍历出来
//*换种方式压入constructor
Object.definePropertie(Admin.prototype, "constructor", {
  value: Admin,
  enumerable: false
})