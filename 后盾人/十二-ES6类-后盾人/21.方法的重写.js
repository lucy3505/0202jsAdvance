//重写父类方法

//通过关键字返回整个课程


class Common {
  sum() {
    return this.data.reduce((t, item) => t + item.price, 0)
  }
  getByKey(key) {
    return this.data.filter(item => item.name.includes(key))
  }
}

class Controller extends Common { }





//定义子类继承父类
class Lesson extends Controller {//有extends&&construtor 就一定要有super,没有extends就可以没有super
  constructor(data) {
    super(data)//如果super没有添加方法的话，例如：super.show()  就会自动调用父类的constructor方法
    this.data = data
  }
  info() {
    return {
      total: super.sum(),
      data: this.data
    }
  }
  //不想要课程，只想要课程名字
  getByKey(key) {
    return super.getByKey(key).map(item => item.name)
  }
}

let data = [
  { name: 'js', price: 200 },
  { name: 'node', price: 202 },
  { name: 'vue.js', price: 210 },
  { name: 'php', price: 222 },
]
console.dir(lesson)
let hd = new Lesson('math')
hd.sum()
console.log(hd.info)
console.log(hd.getByKey('js'))
hd.getByKey('js')

//子类方法的优先级肯定高于父类