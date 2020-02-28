function fun1() {
  console.log('fn1')
}

function fun2() {
  console.log('fn2')
}

function fun3() {
  console.log('fn3')
}

function fun0(fun3) {
  setTimeout(() => {
    fun1()
    setTimeout(() => {
      fun2()
      setTimeout(() => {
        fun3()
      }, 1000)
    }, 1000)
  }, 1000)
}

new Promise((resolve, reject) => {
  if (a == 1) {
    resolve()
  }
})