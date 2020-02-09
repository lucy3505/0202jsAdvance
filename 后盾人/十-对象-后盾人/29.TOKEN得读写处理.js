"use strict"
//token本地存储
let Request={
    set token(content){
        localStorage.setItem('token',content)
    },
    get token(){
        let token = localStorage.getItem('token')
        if(!token){
            alert('请登录')
        }
        return token
    }
}
Request.token = 'fdsfds'
console.log(Request.token)//感觉是从对象存取，但实际是本地存储