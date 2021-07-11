function ajax({url,method:"GET",params,data}){
    method.toUpperCase()

    return new Promise((resolve,reject)=>{

        var request=new XMLHttpRequest()
        request.open(method,url)
        request.responseType = "json"
        request.onreadystatechange = function(){
            if(request.readyState!==4){
                return
            }
            const {status,statusText} = request
            if(status>=200&&status<==300){
                const response={
                    data:response.data,
                    status,
                    statusText
                }
                resolve(response)
            }else{
                reject(new Error('failed with status '+ status))
            }

        }

    if(method==="GET"||method==="DELETE"){
        request.send(null)
    }else{
        request.setRequestHead("Content-Type","application/json;charset=utf-8")
        request.send(data)
    }


    })
}