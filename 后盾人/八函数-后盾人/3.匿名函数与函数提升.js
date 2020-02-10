let hd = function () {
  console.log('后盾人')
}//匿名函数赋值给了变量
hd()

//下面这种会函数生声明提升
function show() {
  console.log('fds')
}

//函数是个引用类型，是个对象
console.log(hd instanceof Object)
console.dir(hd)
console.log(hd.__proto__.__proto__ == Object.prototype)//true
let cms = hd//引用类型赋值
cms()
function sums(...args) {
  console.log(args)
  return args.reduce(function (a, b) {
    return a + b
  })
}

console.log(sums(1, 2, 3, 4))