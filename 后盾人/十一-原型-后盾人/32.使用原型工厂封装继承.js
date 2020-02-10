//封装继承
Object.definePropertie(Admin.prototype, "constructor", {
  value: Admin,
  enumerable: false
})

function User() {

}
function Admin() {

}
Admin.prototyp = Object.create(User.prototype)
function extend(Son, Parent) {
  Son.prototyp
}