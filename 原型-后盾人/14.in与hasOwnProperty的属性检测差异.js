//属性的检测
let a = { url: "houdunren" }
let b = { name: "后盾人" }
//?检测a对象中是否有某一个属性

Object.prototype.web = "hdcms.com"
//in
console.log("url" in a)//*in 不仅检测是否在a对象上，还检测是否在a的原型链上，a对象的原型链上有Object.prototype
console.log("wen" in a)//true
Object.setPrototypeOf(a, b)
console.log("name" in a) //true

//如果指向操作当前对象的话  ,in就不太合适，使用

console.log(a.hasOwnProperty("url"))//true
console.log(a.hasOwnProperty("name"))//false

for (const key in a) {
  // if (a.hasOwnProperty(key)) {
  //   const element = object[key];
  console.log(a[key])

  // }
  //如果不加上面的hasOwnProperty，就会遍历出多条属性，至操作自己的话就要加上if
}