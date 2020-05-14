function ajax(url,data){
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest()
        xhr.open("post",url)
        xhr.send(data)
        xhr.onload=function(){
            if(this.status===200){
                resolve(this.response)
            }else{
                resolve('fail')
            }
        }
        xhr.onerror=function(error){
            reject(error)
        }
    })
}