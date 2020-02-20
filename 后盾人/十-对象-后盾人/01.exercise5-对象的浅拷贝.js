//15.对象浅拷贝:对象里的值是普通值，而不是对象（地址值）
let hd = { name: "houdunren" }
let cms = hd
cms.name = '1111'
//?hd的值是否被改变
//要不被改变怎么处理?


//``方法一
let cm1 = Object.assign({}, hd)
//``方法二：如果属性多不灵活
let cm1 = { name: hd.name }
//``方法二加强版：
let obj = {}
for (const key in hd) {
  obj[key] = hd[key]
}