//有很多模块，
//1.要有一个容器来管理模块，
//2.其次可以定义模块，往容器里面添加模块
//3.模块里有依赖

let module = (function(){
    const moduleList = {}
    //define是我们声明的模块，声明后要放入容器里面，定义个容器来存储模块
    function define(name,modules,action){
        //往里面放的是这个模块最终执行之后的结果action(),要把最终模块依赖的参数也要传进去
        //``既然要依赖,就要把依赖从容器中拿出来
        modules.forEach((m,i)=>{
            modules[i]=moduleList[m]
        })
        moduleList[name]=action.apply(null,modules)
        console.log('houdunren')
    }
    return {define}
})()

module.define('hd',[],function(){//成为导出，因为有向外暴露
    return {
        first(arr){
            return arr[0]
        },
        max(arr,key){
            return arr.sort((a,b)=>b[key]-a[key])[0]
        }    
    }
})//这方法主要帮我们定义模块,第一个参数为模块的名字，后面一个参数代表有没有依赖别的模块,最后一个参数为模块具体的动作

//这时候再来个课程管理模块，要依赖hd模块，要获取可能哪个价格最高
module.define("lesson",['hd'],function(hd){
    //称为导入，因为没有向外暴露什么
    let data = [
        {name:'js',price:199},
        {name:'sql',price:78}
    ]
    console.log(hd.max(data,'price'))
})
//^只有在初始化的时候用到这些代码，后面用的是这些模块初始化后的结果

//!要依赖的模块，必须先声明好，否则就报错找不到
// module.define("b",["a"],function(a){
//     a.site = "hdcms"
// })
module.define("a",[],function(){
    return {
        site:'houdunren',
        url:"houdunren.com"
    }
})

module.define("b",["a"],function(a){
    a.site = "hdcms"
})


module.define("c",["a"],function(a){
    console.log(a.site)  //hdcms//上面b把a里面的内容改了，则我
})

