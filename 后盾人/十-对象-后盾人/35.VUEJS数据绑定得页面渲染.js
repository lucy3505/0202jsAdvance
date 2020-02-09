//代理的例子，双向数据绑定

function View(){
    let proxy = new Proxy({},{
        get(obj,property){},
        set(obj,property,value){

        }
    })
}
this.init = function(){
    const els = document.querySelectorAll('[v-model]')
    els.forEach(item=>{
        item.addEventListener('keyup',function(){
            proxy[this.getAttribute("v-model")] = this.value
        })
    })
}