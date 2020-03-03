

let p1 = new Promise((resovle, reject) => {
  resovle('fufilled')
}).then(
  value => {
    // return new Promise((resolve,reject)=>{
    //   resolve('success')
    // })
    class HD {
      then(resolve, reject) {
        setTimeout(() => {
          resolve('这是对象')
        }, 2000)
      }
    }
    // return {//^除了返回new Promise以外，如果返回的是对象，只要返回里面有then这个方法，也可以当promise用。这个then可以接受resove,和reject两个参数，且和promise的特性相等
    //   then(resolve, reject) {
    //     setTimeout(() => {
    //       resolve('这是对象')
    //     }, 2000)
    //   }
    // }
    // return new HD()//这样也可以
    return class {
      static then(resolve, reject) {
        resolve('这是一个静态方法')
      }
    }
  },
  reason => { }
).then(value => {
  console.log(value)
})