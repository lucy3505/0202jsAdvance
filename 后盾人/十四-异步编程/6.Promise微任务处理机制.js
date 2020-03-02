//pending 准备阶段
//resolve 成功状态
//reject 拒绝状态
// console.log(new Promise((resolve,reject)=>{}))
// new Promise((resolve,reject)=>{
//     resolve('success')
//     reject('reject')
// }).then((value)=>{console.log('success')},(reason)=>{console.log('reject')})
//!then里面产生的是微任务队列，优先级要高于宏任务（定时器等），如果微任务里有任务优先处理微任务里面的

//改写3.test.js
// function  interval(delay) {
//     return new Promise((resolve,reject)=>{
//         let id = setInterval(() => {

//                 resolve(id)
//         }, delay);
//     })

// }
// interval(100).then((id)=>{
//      let el = document.querySelector('div')
//      console.log(el)
    
//     let left = parseInt(window.getComputedStyle(el).left)

//     el.style.left=left+10+'px'
//     interval(100).then((id)=>{
//      let el = document.querySelector('div')
//      console.log(el)
    
//     let left = parseInt(window.getComputedStyle(el).left)

//     el.style.left=left+10+'px'
//     })
// })