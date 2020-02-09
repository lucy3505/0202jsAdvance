//展开语法在对象中的使用
let arr = [1,2,3]
let a =[...arr,5,6,7]
console.log(a)
let user={name:'xiangjun',age:22}
let hd  = {...user,lang:'zh'}
console.log(hd)

function upload(params){
    let config={
        type:'*.jpeg,*.png',
        size:10000
    }
    //*不传就用默认的，传了就用你的，同名的，后面的覆盖前面的
    config={...config,...params}
    console.log(config)
}
console.log(upload({size:99}))