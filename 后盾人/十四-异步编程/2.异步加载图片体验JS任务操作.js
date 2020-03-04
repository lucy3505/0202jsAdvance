function loadImg(src, resolve, reject) {
    let image = new Image()
    image.src = src
    //上面的加载过程是要耗时间的
    // image.onload = resolve  //图片加载成功之后的任务
    image.onload = () => {//^成功的话就执行这个函数
        resolve(image)//^函数传参，得到这个IMAGE的数据，通过传参传到外面进行处理
    }  //图片加载成功之后的任务
    image.onerror = reject  //图片加载失败之后的任务
}
//执行loadImg的时候把这个交给了一个文件处理的模块
loadImg('image/houdunren.gif', (image) => {
    document.body.appendChild(image)
}, () => {
    console.log("fail")
});//加载图片，图片没加载完，“后盾人"就打印出来了
console.log("后盾人")

//主任务没有了之后才会去列表里轮询
//回调函数：不是我们自己调的，是系统去调


