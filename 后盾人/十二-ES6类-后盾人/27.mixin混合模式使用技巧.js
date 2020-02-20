//继承：子类用父类的方法
//mixin方法

let Tool = {//这里有个工具对象，里面有一堆方法，这时候我想使用里面的一些方法
  max(key) {
    return this.data.sort((b, a) => b[key] - a[key])[0]
  }
}

let Arr = {
  count(key) {
    return this.data.reduce((t, c) => t + c, 0)
  }
}
class Lesson {
  constructor(lessons) {
    this.lessons = lessons
  }
  get data() {
    return this.lessons
  }
}

const data = [
  { name: 'js', price: 222 },
  { name: 'node', price: 212 },
  { name: 'vue.js', price: 322 },
  { name: 'java', price: 522 },
]

Object.assign(Lesson.prototype, Tool, Arr)//原型也是个对象，往这个原型对象里压入一些属性
console.log(Lesson)
let hd = new Lesson(data)
console.log(hd.max('price'))
console.log(hd.count('click'))