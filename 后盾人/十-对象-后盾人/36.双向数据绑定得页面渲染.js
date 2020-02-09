function View(){
    let proxy = new Proxy({},{
        get(obj,property){},
        set(obj,property,value){
            document.querySelectorAll(`[v-model="${property}"]`).forEach(item=>{
                item.value = value
            })
            document.querySelectorAll(`[v-bind="${property}"]`).forEach(item=>{
                item.innerHTML= value
            })
        }
    })
    this.init = function(){
        const els = document.querySelectorAll('[v-model]')
        els.forEach(item=>{
            item.addEventListener('keyup',function(){
               
                proxy[this.getAttribute('v-model')] = this.value
            
              
            })
        })
    }
}
new View().init()

