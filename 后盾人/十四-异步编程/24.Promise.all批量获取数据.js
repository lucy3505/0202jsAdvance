
const houdunren1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('第一个异步')
    }, 1000);
}).catch(err=>{
    console.log(err)
})


const houdunren2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('第2个异步')
    }, 1000);
})

//其中有一个状态是拒绝得，那么all得状态就是拒绝得

Promise.all([houdunren1,houdunren2]).then(result=>{
    console.log(result)  //上面得异步都没有拒绝得处理，all是可以处理得,隔日catch处理，但如果异步里都有catch处理了，那么给all得时候就是解决状态，交给then处理了
}).catch(err=>{
    console.log(err)
})

const promise = ['houdunren','xiangjun'].map(name => {
    return ajax(`http://localhost:8888/php/user.php?name=${name}`)
})
console.log(promise)

Promise.all(promise).then(users=>{
    console.log(users)
})

//把promise封装成函数
function getUsers(names){
   let promises= names.map(name=>{
        return ajax(`http://localhost:8888/php/user.php?name=${name}`)
    })
    return Promise.all(promise)
}
getUsers(['houdunren','xiangjun']).then(users => {
    console.log(users)
})