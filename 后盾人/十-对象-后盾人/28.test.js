//使用访问器批量设置属性

"use strict"
const web = {
    name: 'houdun',
    url: 'cms.com',
    set site(value) {
        [this.name, this.url] = value.split(',')
    },
    get site() {
        return `${this.name}的网址上${this.url}`
    }
}

web.site = "houdunren,cms.com"
console.log(web.site)