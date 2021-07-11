function ajax(){
  var xhr = new XMLHttpRequest()
  xhr.open("post",url)
  xhr.send(data)
  xhr.onload=function(){
    if(xhr.status===200){
      cb(this.response)
    }
  }
}