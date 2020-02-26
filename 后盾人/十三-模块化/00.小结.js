//``3.
//模块不导出的时候是私有的，如果用script标签引入的话又会变成是全局的
/* 
目前你导出什么名字，外部就用什么名字
例：export {title,show}
import {title} from './XXX
 */

 //``4
 //模块的机制是后解析，dom解析完才解析
//  模块默认运行在严格模式

//``5
//每个模块有自己的独立作用域，类似函数
//这样就可以实现按需导出功能

//``6  预解析
//每次只在导入的时候解析一下，后面都不再解析

// ``7模块的具名与别名
export let site = "houdunren"
export function show(params) {//这里如果函数不给名字会报错
    return 'show-function'
}
export class User{
    static render(){
        return "user"
    }
}

// export {site,show,User}上面的变量如果不屑export这里就要写

//``8