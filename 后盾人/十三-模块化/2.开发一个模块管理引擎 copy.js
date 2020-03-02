var module={
    define(name,moduleArr,action){
        var modules = {

        }
        // modules[name]  = action
        var arr = moduleArr.map(name=>{
            return modules[name]
        })
        modules[name] = action.apply(null,arr)
    }
}