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
//模块有自己的独立作用域