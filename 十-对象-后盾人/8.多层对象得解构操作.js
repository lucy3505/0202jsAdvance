let hd = {
    name:'houdun',
    lesson:{
        title:'java'
    }
}
//解构复杂的对象
let {name,lesson:{title}} =hd 
console.log(name,title)
// let {title} = {
//     title:'java'
// }