
//带有then方法得对象或类，可以把它封装成Promise对象
let hd = {
    then(resolve,reject) {
        resolve("houdunren")
    }
};
Promise.resolve(hd).then(value => {
    console.log(value) //houdunren
})

Promise.reject('fail').then(value=>{
    console.log(value)//这里是拿不到值得，必须写cathce，否则报错
}).catch(err=>{
    console.log(err) //fail
})
new Promise((resolve,reject)=>{
    resolve('success')
}).then(value=>{
    console.log(object)
    if(value!=='success'){
        // throw new Error('error')//可以用这个也可以用下面得
        return Promise.reject('参数错误')
    }
}).catch(err=>{
    console.log(err)
})