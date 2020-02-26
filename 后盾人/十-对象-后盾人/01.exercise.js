function User(name, age) {
  // this.age = age
  this.name = name
  let data = { name: 'hhh', age: 18 }
  let info = function () {
    return data.age > 50 ? '老年' : '青年'
  }

  // this.name = name
  // this.age = age
  this.show = function () {
    console.log(data.name + info()) //?this.info()这个方法就是给内部使用的，不希望外部能修改  xj.info=..
  }
  this['set age'] = function (value) {
    if (typeof value !== "number" && value < 10 && value > 100) {
      throw new Error('年龄格式错误')
    }
    this.age = value
  }
  this['get age'] = function (value) {
    return data.age
  }
  // this.info=function(){
  //     return data.age>50?'老年':'青年'
  // }
}

let xj = new User('xiangjun', 50)