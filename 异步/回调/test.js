function fun1() {
  console.log('fn1')
}

function fun2() {
  console.log('fn2')
}

function fun3() {
  console.log('fn3')
}

// function fun0() {
//   setTimeout(() => {
//     fun3()
//     setTimeout(() => {
//       fun2()
//       setTimeout(() => {
//         fun1()
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }
// fun0()

let fun0=new Promise((resolve, reject) => {
  setTimeout(()=>{
    fun3()
    resolve()
  },1000)
}).then(value=>{
 
  return new Promise(resolve=>{
    setTimeout(()=>{ 
      fun2()
      resolve()
    },1000)
  // })/
}).then(value=>{
 setTimeout(()=>{ 
      fun1()
  
    },1000)
})
// fun0()


let fun0=new Promise((resolve, reject) => {
  setTimeout(()=>{
    fun3()
    resolve()
  },1000)
}).then(value=>{
 
  // return new Promise(resolve=>{ //!如果不写return  那么then也是个promise，默认是返回成功状态，那么这里的异步
    setTimeout(()=>{ 
      fun2()
      // resolve()
    },1000)
  // })
}).then(value=>{
 setTimeout(()=>{ 
      fun1()
  
    },1000)
})