class Animation {

    changeColor(color){
        this.style.background=color
    }    
    show(){
        this.style.display="block"
    }
    hide(){
        this.style.display="none"
    }
}

class Tab extends Animation{
    constructor(params){
        super(params)
        params=Object.assign({el:null,link:"a",section:"section"},params)
        this.el = document.querySelector(params['el'])
        this.links=this.el.querySelectorAll(params['link'])
        this.sections = this.el.querySelectorAll(params['section'])
    }
    bindEvent(){
        this.links.forEach((item,index)=>{
            item.onclick=()=>{
                this.reset()
                this.active(index)
            }
        })
    }
    reset(){
        this.links.forEach((item,index)=>{
            this.changeColor.call(item,'#ccc')
            this.hide.call(this.sections[index])
        })
    }
    active(i){
        this.show.call(this.sections[i])
        this.changeColor.call(this.links[i],'#0f0')
    }
}


// new Tab({el:'.tab1'}).bindEvent()
new Tab({el:'.tab2'}).bindEvent()

