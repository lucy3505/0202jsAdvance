//对属性控制更严格的方式:冻结

"user strict"

const user = {
    name:'houxunren',
    age:18
}
Object.freeze(user)
//*不能往对象添加属性
user.site = "houdunren.com"
//!修改值也不可以
user.name = "houdunren1"
//*删除也不可以，不能对特征定义
delete user.name
(Object.getOwnPropertyDescriptors(user),null,2))

//* {"name":{
//     "value":"houdunren",
//     "writable":false,
//     "enumerable":true,
//     "configurable":false
// }}

//``判断对象是否是冻结对象
Object.isFrozen(user)//是的话返回true

//*使用冻结可以使对象完全冻结，也是单行线，后台返回的用户信息就可以使用freeze

