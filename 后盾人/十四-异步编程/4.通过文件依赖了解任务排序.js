//Js不断轮询任务集合（列表），houdunren.js是依赖hd.js
说明要保证hd.js先加载进来才能执行houdunren.js
script标签通过document.create创建得时候async是默认为true得，也就是加载完成时就执行，script还有一个异步得属性defer，这个是DOM渲染完成后才会执行，而且是按照标签进入得顺序进行执行

function createScript(src,resolve){
    var script = document.createElement('script')
    script.src = src
    src.onload = resolve()//这步是异步的 所以先执行了下面的同步代码，事件都是异步的
    document.appendChild(script)
    resolve()
}

createScript('./4.hd.js',()=>{
    hd()
    createScript('./4.houdunren.js',()=>{
        houdunren()
    })
})