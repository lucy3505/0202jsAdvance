function ajax({url,method="GET",params={},data={}}){
    
    method=method.toUpperCase()
    let request = new XMLHttpRequest()
    request.open(method,url)
    request.responseType = "json"
    request.onreadystatechange=function(){
        if(request.readyState!==4){
            return
        }

        const {status,statusText} = request
        if(status>==200&&status<300){
            const request={
                data:request.data,
                status,
                statusText
            }
            resolve(request)
        }else{
            reject(new Error('failed in status' + status))
        }
    }
    if(method === "GET" || method === "DELETE"){
        request.send(null)
    }else{
        request.setRequestHeader("Content-Type","application/json;charset=utf-8")

        request.send(data)
    }
}