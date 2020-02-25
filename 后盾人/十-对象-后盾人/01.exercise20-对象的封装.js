

//使用工厂或构造函数得价值：就是把对象得属性封装到构造函数得内部
let xj = {}
xj.name = "xiangjun"
xj.show = function (name) {
  console.log(name)
}
function User(name) {
  this.name = name
  this.show = function () {
    info()
  }
  let info = function () {
    return this.age > 50 ? '老年' : '青年'
  }

}


//?让age变为



//
let user = new User('jack', 18)
user.show()
//?不想让人修改name
function User(name) {
  let data = { name }
}

let user = new User('jack')

user.name = '11'