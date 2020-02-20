//26.使用访问器保护对象

// const user = {
//   name: 'houxunren',
//   age: 18
// }
//?对属性的值进行限制判断
// user.age = 99 
const user = {

  data: { name: 'houxunren', age: 18 },
  set age(value) {
    if (value < 18 || value > 30 || typeof value !== "number") {
      throw new Error('年龄错误')
    }
    this.data.age = value
  },
  get age() {
    return this.data.age + '岁'
  }
}

user.age = 25
console.log(user.age)