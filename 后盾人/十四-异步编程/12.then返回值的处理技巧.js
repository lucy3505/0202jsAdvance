

let p1 = new Promise((resolve, reject) => {
  resolve('fulfilled')

}).then(value => {
  // return 'success'//return出来的值后面的then就能接到
  //如果这里没有return  那么后面then里面拿到的就是undefined
  console.log(11)
  // return new Promise((resolve, reject) => {//现在还是pendind状态
  //   resolve(value)
  //   // reject('err')
  // })
}, reason => { console.log("error" + reason) }
).then(value => console.log(value))//success

console.log(p1)//pending状态  因为return new Promise是pendind                                                                                                             
//^只要你返回，后面的then就是对你前面返回的处理
