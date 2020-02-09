//闭包得问题：内存泄漏
let btns = document.querySelectorAll('div')
divs.forEach(function(item){
    let desc = item.getAttribute("desc")
    item.addEventListener("click",function(){
        // console.log(item.getAttribute("desc"))
        console.log(desc)
        console.log(item)//打印不了了
        //这个点击函数只是要desc
    })
    item = null
})