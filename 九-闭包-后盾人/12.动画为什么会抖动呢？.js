// let btns = document.querySelectorAll('button')
// btns.forEach(function(item){
//     item.addEventListener('click',function(){//点击一次就会产生一个环境
//         let left = 1 //每个left都是独有的
//         console.log(left)
//         setInterval(function(){
//             console.log(item)
//             item.style.left=left++ + 'px'
//         }, 100);//?时间改成100,会发现有抖动现象
//     })
// })

//解决方法：原因是每次点击一次都产生一个left环境，每次点击，left都重新从1开始计算，产生多个作用域，每个Left不一样就发生了抖动
//^解决方法一：把left放到外面的作用域，这时候的left就是外层函数的变量，而不是click回调函数里的变量，如果放到click回调函数里就会每次点击都产生新的作用域
let btns = document.querySelectorAll('button')
btns.forEach(function(item){
    let left = 1 //每个left都是独有的
    item.addEventListener('click',function(){//点击一次就会产生一个环境
        
        console.log(left)
        setInterval(function(){
            console.log(item)
            item.style.left=left++ + 'px'
        }, 100);//?时间改成100,会发现有抖动现象
    })
})

//?新问题：点击多次button会移动得越来越快
//原因是：每点击一次，就多出一个setInterval作用域，那么item.style.left就会多次执行，越多setInterval速度也越快