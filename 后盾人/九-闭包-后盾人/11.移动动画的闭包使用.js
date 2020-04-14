let btns = document.querySelectorAll('button')
btns.forEach(function (item) {
    item.addEventListener('click', function () {//点击一次就会产生一个环境
        let left = 1 //每个left都是独有的
        console.log(left)
        setInterval(function () {
            item.style.left = left++ + 'px'
        }, 5);//?时间改成100,会发现有抖动现象
    })
})