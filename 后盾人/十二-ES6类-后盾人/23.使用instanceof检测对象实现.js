//继承关系的判断  
function User() { }
function Admin() { }
Admin.prototype = Object.create(User.prototype)
let hd = new Admin()
console.log(hd instanceof Admin)//true
console.log(hd instanceof User)//true
console.log(hd.__proto__ == Admin.prototype)//true
console.log(hd.__proto__.__proto__ === Admin.prototype.__proto__)//true


//instancof的模拟实现
function checkPrototype(obj, constructor) {
  if (!obj.__proto__) return false
  if (obj.__proto__ === constructor.prototype) return true
  return checkPrototype(obj.__proto__, constructor)
}
console.log(checkPrototype(hd, user))