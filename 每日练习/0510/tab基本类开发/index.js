class Animation {

    show(){
        this.style.display="block"
    }
    hide(){
        this.style.display="none"
    }
    bgColor(color){
        console.log(this)
        this.style.background = color
    }
}

class Tab extends Animation{
    constructor(args){
        super(args)
        args=Object.assign({el:null,link:"a",sections:"section"},args)
        this.el = document.querySelector(args["el"])
        this.links = this.el.querySelectorAll(args["link"])
        console.log(this.links)
        this.sections = this.el.querySelectorAll(args["sections"])
    }
    bindEvent(){
       
        this.links.forEach((item,index)=>{
            item.onclick=()=>{
                // console.log(item)
                // console.log(this.bgColor)
                // this.bgColor("#efe").call(item)//!这么写是错得
                // // 要不可以这样
                console.log(this)
                // console.log(this.links[index])
              
                this.reset()  
                // this.bgColor.call(item,"#efe")
                this.active(index)
            }
        })
    }
    active(i){
        this.bgColor.call(this.links[i],"#efe")
        this.bgColor.call(this.sections[i],"#0f0")
        this.show.call(this.sections[i])
    }

    reset(){
   
        this.links.forEach((item,index)=>{
            this.bgColor.call(this.links[index],"#ccc")
            this.hide.call(this.sections[index])
        })
    }
    run(){
        this.bindEvent()
    }
}
 new Tab({el:".tab1"}).run()