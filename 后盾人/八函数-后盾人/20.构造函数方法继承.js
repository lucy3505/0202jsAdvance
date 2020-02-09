// 使用call和apply实现属性的继承

function Request(){
 this.get = function(params){
        //i=1&cat=js
        console.log(Object.keys(params))
        let str =  Object.keys(params).map(k=>`${k}=${params[k]}`).join('&')
    
        let url = `https://houdunren.com?${this.url}/${str}`
        console.log(url)
    }
}
function Article(){
    this.url = 'article/lists';
   Request.call(this)
}

let a = new Article()
console.log(a.get({id:1,cat:'js'}))

function User() {
    this.url = 'user/lists';
    Request.call(this)

}


let user = new User()
console.log(a.get({id:2,cat:'admin'}))
