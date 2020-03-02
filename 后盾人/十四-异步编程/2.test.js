//异步加载图片

function loadImg(src,resolve,reject){
    let image = new image()
    image.src = src
    image.onload=()=>{
        resolve(image)
    
    }
    image.onerror = reject
}

loadImg('image/houdunren.gif',(image)=>{
    document.body.appendChild(image)
},()=>{
    console.log('fail')
})

//封装一个定时器

function interval(cb,delay){
    let id = setInterval(() => {
    cb(id)
    }, delay);
}

