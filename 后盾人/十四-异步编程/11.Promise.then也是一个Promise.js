then返回也是promise,且加入到微任务里，默认是对上一个promise的处理
//每一个then是对上一个promise的处理，默认是返回成功，就是你.then如果没有return new Promise去改变里面的状态的话，那么默认就是执行value=>{}，而不是reason=>{}
//后面的then就是对我前面返回的Promise的处理
let p1= new Promise((resolve,reject)=>{
    reject('reject')
})
let p2=p1.then(
    value=>console.log(value)
    reason=console.log(reason)
).then(a=>{console.log('success')},b=>{console.log(b)})