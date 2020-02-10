//找到合适的时机退出这个循环
//阶乘  5*4*3*2*1,重复数量不定的时候使用阶乘

function factorial(num) {
  if (num == 1) {
    return 1
  }
  return num * factorial(num - 1)
  //return 3*2*1
  //return 2*1
  //return 1
}

//考虑2层
console.log(factorial(3))