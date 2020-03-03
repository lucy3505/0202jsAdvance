new Promise((resove, reject) => {
  resolve('fulfilled')
  reject(new Error('promise fail'))//这个会直接给到reason
  //还有一种  直接抛的错误也会走reason
  throw new Error('error')
  hd + 1//这个也是错误的 系统会自动抛去reason
}).then(value => {
  return new Promise((resolve, reject) => {
    resolve('success')
    reject('reject')
  })
}, reason => {
  console.log(reason.message)
}).then(value => {
  // 这里得then处理return new Promise里的状态，
}).catch((Err) => {//如果catch前面没有错误捕获的处理，可以全部堆在最后捕获
  console.log(Err)
})