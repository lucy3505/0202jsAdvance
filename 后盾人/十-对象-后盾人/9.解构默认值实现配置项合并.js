//解构的默认值
let arr = ['houdun','houdunren.com']
let [a,b,c="hdcms"] = arr
console.log((a,b,c))

//值不存在才用默认值
let user= {name:'houdun',url:"houdunren.com"}
let{url,name,title = "hdcms"}=user
console.log(name,url,title)

//*用来做参数的合并
//创建DOM节点
function createElement(options={}){
    let {
        width=200,
        height=200,
        backgroundColor='red'
    }=options
    const div = document.createElement('div')
    div.style.width = width + 'px'
    div.style.height = height + 'px'
    div.style.backgroundColor = backgroundColor
    document.body.appendChild(div)

}
createElement({width:60,height:30,backgroundColor:"green"})