//__proto__是属性访问器 setter getter
let hd = { name: 'houdunren' }
hd.__proto__ = {
  show() {
    console.log(this.name)
  }
}
hd.__proto__ = 99
hd.show()//还是能打印出houdunren ，不受hd.__proto__修改的影响
//可以只能判断给__proto__设置的是不是对象，不是对象就无法设置成功
let hd = {
  action: {},
  get proto() {
    return this.action
  },
  set proto(value) {
    if (value instanceof Object) {
      this.action = value
    }
  }
}

//__proto__不是严格意义的属性，是getter或setter,会对设置的值进行判断
//?如果就要给__proto__设置不是对象的值呢？
//看这个方法在哪里，发现在原型上
let obj = Object.create(null)
obj.__proto__ = "houdunren"