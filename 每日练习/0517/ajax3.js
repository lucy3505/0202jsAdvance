function ajax3({url,method="GET",params={},data={}}){
    method=method.toUpperCase()

    return new Promise((resolve,reject)=>{
        let request = new XMLHttpRequest()
        request.open(method,url)
        request.responseType = "jspn"
        request.onreadystatechange=function(){
            if(request.readyState!==4){
                return
            }
            const {status,statusText} = request
            if(status>==200&&status<300){
                const response = {
                    data:request.data,
                    status,
                    statusText
                }
                resolve(response)
            }else{
                reject(new Error('failed with status' + status))
            }
        }
        if(method === "GET"||method==="DELETE"){
            request.send(null)
        }else{
            request.setRequestHeader("Content-Type","application/json;charset=utf-8")
            request.send(data)
        }
    })
}