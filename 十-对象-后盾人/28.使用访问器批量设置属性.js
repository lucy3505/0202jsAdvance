//使用访问器批量设置属性

"use strict"
const web = {
    name:"houdunren",
    url:'houdunren.com',
    set site(value){
         [this.name,this.url] = value.split(',')
    },
    get site(){
        return `${this.name}的网址是${this.url}`
    }
}
web.name = "hdcms"
web.url = "www.hdcms.com"

//?使用一行同时设置name和cms
web.site="hdcms,www.hdcms.com"