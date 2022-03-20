//下面函数是直接报错的
function test(a){
  console.log(1)
}()

//!下面这种不会报错，会把(6)看成是表达式，把test1看成声明，(没值就只能看成立即执行)
function test1(a){
  console.log(1)
}(6)

//!! 逗号运算符返回逗号运算符后面的数值
console.log((6,5)) //5