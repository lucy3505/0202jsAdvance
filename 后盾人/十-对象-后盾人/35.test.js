//代理的例子，双向数据绑定

// function View(){
//     let proxy = new Proxy({},{
//         get(obj,property){},
//         set(obj,property,value){
//             console.log(22)
//         }
//     })

// this.init = function(){
//     const els = document.querySelectorAll('[v-model]')
//     els.forEach(item=>{
//         item.addEventListener('keyup',function(){
//             console.log(11)
//             proxy[this.getAttribute("v-model")] = this.value  //*proxy相当于创建了一个空对象
//         })
//     })
// }

function View(){
    let proxy = new Proxy({},{
        get(obj,property){},
        set(obj,property,value){

        }
    })
    this.init = function(){
        const els = document.querySelectorAll('[v-model]')
        els.forEach(item=>{
            item.addEventListener('keyup',function(){
                console.log(11)
                proxy[this.getAttribute('v-model')] = this.value
              
            })
        })
    }
}
let m = new View()
m.init()
