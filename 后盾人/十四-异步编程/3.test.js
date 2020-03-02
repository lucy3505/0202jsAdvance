//?封装一个定时器任务
//?让方块向右移动
function interval(cb,delay){
    let id = setInterval(() => {
        cb(id)
    }, delay);
}
function cb(id){
    let el = document.querySelector('div')
    
    let left = parseInt(window.getComputedStyle(el).left)

    el.style.left=left+10+'px'
    if(left>=200){
        clearInterval(id)
        interval(id=>{
            let width = parseInt(window.getComputedStyle(el).width)
            el.style.width = width-10+'px'
            if(width<=20){
                clearInterval(id)
            }
        },100)
    }
}
interval(cb,100)
//?让方块停下来后又变窄
