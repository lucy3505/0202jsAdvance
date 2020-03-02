
let p1=new Promise((resolve,reject)=>{
    resolve('success')
    reject('')
})

new Promise((resolve,reject)=>{
    resolve(p1)//^ 注意，这时候传递给后面的状态就是p1的状态
    //如果值是promise会影响到后面，如果p1返回的状态是reject，就会对应后面的error,如果p1获取状态要两秒的话，那就要等p1 2秒后返回状态后才会执行后面的then
    //状态改变后后面再改变状态也没用

    // setTimeout(() => {
    //     resolve('fulfilled')
    // }, 2000);
}).then(msg=>{
    console.log((msg))
},error=>{
    console.log(error)
})