//定义父类

class Common {
  sum() {
    return this.data.reduce((t, item) => t + item.price, 0)
  }
}

class Controller extends Common { }


// class Controller {
//   constructor() {
//     console.log('22')
//   }
//   sum() {
//     return this.data.reduce((t,item)=>t+item.price,0)
//   }
// }

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
}

let data = [
  { name: 'js', price: 200 },
  { name: 'node', price: 202 },
  { name: 'java', price: 210 },
  { name: 'php', price: 222 },
]
console.dir(lesson)
let hd = new Lesson('math')
hd.sum()
console.log(hd.info)