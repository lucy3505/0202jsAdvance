function ajax({url,method="GET",params={},data={}}){
    console.log(url)
        method=method||"GET"
        method = method.toUpperCase()
    let str=''
        str+=Object.keys(params).map(key=>`${key}=${params[key]}`).join("&")

        console.log(str)
        if(str){
            url+="?"+str
        }
    // return new Promise((resolve,reject)=>{
    //     let request = new XMLHttpRequest()
        
    //     request.open(method,url)
    //     request.responseType = "json"
    //     request.onreadystatechange=function(){
    //         if(request.readyState!==4){
    //             return 
    //         }
    //         const {statue,statusText} = request
    //         if(status>=200 && status<300){
    //             const response = {
    //                 data:request.data,
    //                 status,
    //                 statusText
    //             }
    //             resolve(Response)
    //         }else{
    //             reject(new Error('request error status is' + status))
    //         }
    //     }

    //     if(method === "GET" || method === "DELETE"){
    //         request.send(null)
    //     }else{
    //         request.setRequestHeader("Content-Type","application/json;charset=utf-8")
    //         request.send(data)
    //     }
    // })
}
ajax({url:'11',method:"GET",data:11})