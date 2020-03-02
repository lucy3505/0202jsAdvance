function  ajax(url,callback,data) {
    var xhr = new XMLHttpRequest()
    xhr.open("post",url)
    xhr.send(data)
    xhr.onload = function(){
        if(this.status===200){
            callback(JSON.parse(this.response))
        }else{
            throw new Error('fail')
        }
    }
}
