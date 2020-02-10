//如果某个原型链中没有这个功能，另一个原型链上有这个功能，借用别的原型链上的功能

let hd = {
  data: [1, 2, 3, 4, 5]
}
Object.setPrototypeOf(hd, {
  max() {
    return this.data.sort((a, b) => b - a)[0]
  }
})

console.log(hd.max())
let xj = {
  lessons: { js: 87, php: 66, Linux: 22, node: 99 },
  get data() {
    Object.values(this.lessons)
  }
}

console.log(hd.max.apply(xj))