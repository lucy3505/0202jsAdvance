const moudle = (function(){
    const moduleList = {}
    function define(name,modules,action){
    
        modules.map((n,i)=>modules[i]=moduleList[n])
        moduleList[name] = action.apply(null,modules)

   
        console.log('11')
    }
    return {define}
})()

moudle.define('m1',[],function(){
    return {
        max(arr){
            return arr.sort((a,b)=>b-a)[0] 
        }
    }
})