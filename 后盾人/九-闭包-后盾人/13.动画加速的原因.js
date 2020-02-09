//解决加速
//?新问题：点击多次button会移动得越来越快
//原因是：每点击一次，就多出一个setInterval作用域，那么item.style.left就会多次执行，越多setInterval速度也越快
//^不要让这几个作用域都执行，用判断进行执行
let btns = document.querySelectorAll('button')
btns.forEach(function(item){
    // let left = 1 //每个left都是独有的
    let flag = false
    item.addEventListener('click',function(){//点击一次就会产生一个环境
        
        if(!flag){
            let left = 1 //这样 能不污染外部环境
            flag = true
            setInterval(function(){
                console.log(item)
                item.style.left=left++ + 'px'
            }, 100);//?时间改成100,会发现有抖动现象
        }
    })
})
