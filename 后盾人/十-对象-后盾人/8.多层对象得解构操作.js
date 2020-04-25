// let hd = {
//     name:'houdun',
//     lesson:{
//         title:'java'
//     }
// }
// //解构复杂的对象
// let {name,lesson:{title}} =hd 
// console.log(name,title)
// // let {title} = {
// //     title:'java'
// // }

let hd2 = {
    name:'houdun',
    lesson:{
        title:'java',
        ls:{l1:111}
    }
}
// let {lesson:{ls:{l1,l2='a'}}}=hd2
// console.log(l1,l2)
function f2({lesson:{ls:{l1,l2='a'}}}) {
    console.log(l1,l2)
}
f2(hd2)

function f3({lesson:{ls:{l1,l2='a'}}}) {
    console.log(l1,l2)
}
f3(hd2)