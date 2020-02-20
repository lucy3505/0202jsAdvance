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