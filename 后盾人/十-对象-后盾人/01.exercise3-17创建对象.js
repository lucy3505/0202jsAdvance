//17.使用工厂函数创建对象
let xj = {
  name: 'xiangjun',
  show() {
    console.log(this.name)
  }
}
let hd = {
  name: 'houdun',
  show() {
    console.log(this.name)
  }
}

//一类对象往往处理得动作一样
//?修改一个show内容，就要重复修改几个对象相同得内容，如何改变？
function factory(name) {

  return {
    name,
    show() {
      console.log(name)
      //!console.log(this.name)
    }
  }
}

let xj = factory('xiangjun')