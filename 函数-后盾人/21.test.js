//用call方法实现一个面板切换
let dts = document.querySelectorAll('dt')

dts.forEach((elem,i)=>elem.addEventListener('click',()=>{
   panel(i)
}))

function panel(i){
     let dds = document.querySelectorAll('dd')
    dds.forEach(dd=>dd.setAttribute('hidden','hidden'))
  dds[i].removeAttribute('hidden')
}