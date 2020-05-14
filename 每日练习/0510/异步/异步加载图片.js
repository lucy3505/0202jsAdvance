function loadImg(src){
    return new Promise((resolve,reject)=>{
        var img = new Image()
        img.src = src
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject()
        }
        document.body.appendChild(img)
    })
}