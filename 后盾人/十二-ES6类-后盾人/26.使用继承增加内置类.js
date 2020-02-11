class Arr extends Array {
  constructor(...args) {
    super(...args)
    // args.forEach(item => this.push(item))  不需要这行代码，extends Array自动把生成的对象变数组了
  }
  first() {
    return this[0]
  }
  max() {
    this.sort((a, b) => b - a)[0]
  }
  add(item) {
    this.push(item)
  }
  remove(value) {
    let pos = this.findIndex(item => item === value)
    this.splice(pos, 1)
  }
}

let hd = new Arr(1, 2, 3, 4, 3, 33, 7, 6)
console.log(hd)
hd.add('houdunren')
hd.remove(2)