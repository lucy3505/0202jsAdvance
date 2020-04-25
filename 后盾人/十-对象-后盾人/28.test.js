//使用访问器批量设置属性

"use strict"
const web = {
    name: 'houdun',
    url: 'cms.com',
    get site() {
        return `${this.name}的网址是:${this.url}`
    },
    set site(value) {
        [this.name, this.url] = value.split(',')
    }
}

web.site = "xyy,xyy.com"
console.log(web.site)