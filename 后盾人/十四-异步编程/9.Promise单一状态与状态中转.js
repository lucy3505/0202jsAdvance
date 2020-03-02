
let p1 = new Promise((resolve, reject) => {
    resolve('success')//执行这一行会产生微任务，微任务会下次轮询的时候才执行
    reject('')
})

new Promise((resolve, reject) => {
    resolve(p1)//^ 注意，这时候传递给后面的状态就是p1的状态，resolve的值是promise，那么会影响到下面的then
    resolve('fufilled')//上面执行了下面的就不会有效果
    //如果值是promise会影响到后面，如果p1返回的状态是reject，就会对应后面的error,如果p1获取状态要两秒的话，那就要等p1 2秒后返回状态后才会执行后面的then
    //状态改变后后面再改变状态也没用

    // setTimeout(() => {
    //     resolve('fulfilled')//改变状态了才会产生微任务，如果状态改变的比较晚，那么微任务也比较晚执行，这里也是延迟2s执行
    // }, 2000);
}).then(msg => {
    console.log((msg))
}, error => {
    console.log(error)
})