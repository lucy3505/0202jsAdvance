// let lesson = {
//   name: 'lesson',
//   list: ['js', 'node', 'java']
// }

// let lesson2 = {
//   name: 'lesson',
//   list: ['js', 'node', 'java']
// }
// //?  要求：在lesson中写一个show方法，方法里面用map返回  调用对象的name -js'
// let lesson={
//     name:'lesson',
//     list:['js','node','java'],
//     show(){
//         this.list.map((item)=>{
//             return `${this.name}-${item}`
//         })
//     }
// }


//? 要求，有一个按钮button,有个DOM对象，里面有个bind函数，要求DOM.bind()是个button的点击事件，button点击的时候输出DOM里面的site和button里面的innerHTML
let DOM={
    site:'site',
    bind(e){
        console.log(this)
        console.log(this.site)
        console.log(e.target.innerHTML)
    }
}
let btn=document.getElementById('btn')
btn.onclick=DOM.bind.bind(DOM)