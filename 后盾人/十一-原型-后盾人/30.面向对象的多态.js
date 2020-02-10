
//多态：根据不同状态显示不同结果
function User() {

}
User.prototype.show = function () {
  console.log(this.description())
}

function Admin() {

}
Admin.prototype.__proto__ = User.prototype
Admin.prototyp.description = function () {
  return '管理员'
}
function Member() {

}
Member.prototyp.description = function () {
  return '会员'
}
Member.prototype.__proto__ = User.prototype


function Enterprise() {

}
Enterprise.prototyp.description = function () {
  return '企业账户'
}
Enterprise.prototype.__proto__ = User.prototype

//三个子类：Admin,Member,Enterprise 继承了父类User
for (const obj of [new Admin(), new Member(), new Enterprise()]) {
  obj.show()
}

//``如果没有使用继承，则变成下面
function Admin() {

}
// Admin.prototype.__proto__ = User.prototype
Admin.prototyp.showAdmin = function () {
  return '管理员'
}
function Member() {

}
Member.prototyp.showMember = function () {
  return '会员'
}
// Member.prototype.__proto__ = User.prototype


function Enterprise() {

}
Enterprise.prototyp.showEnterprise = function () {
  return '企业账户'
}
// Enterprise.prototype.__proto__ = User.prototype

//三个子类：Admin,Member,Enterprise 继承了父类User
for (const obj of [new Admin(), new Member(), new Enterprise()]) {
  if (obj instanceof Admin) {
    obj.showAdmin()
  } else if (obj instanceof Member) {
    obj.showMember()
  } else if (obj instanceof Enterprise) {
    obj.showEnterprise()
  }
}