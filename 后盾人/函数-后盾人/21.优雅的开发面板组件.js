//用call方法实现一个面板切换

function panel(i){
    let dds= document.querySelectorAll('dd')
       dds.forEach((dd)=>{
           dd.setAttribute('hidden','hidden')
       })
       dds[i].removeAttribute('hidden')
}


document.querySelectorAll('dt').forEach((dt,i)=>{
    console.log(dt)
    dt.addEventListener('click',()=>{
       panel.call(null,i)//*不需要使用到this,但是用到参数,也可以直接panel(i)
    })
})