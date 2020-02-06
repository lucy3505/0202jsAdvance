//有多个个按钮
let Dom={
    site:'后盾人',
    handleEvent:function(event){
        console.log(event.target)
         console.log(this.site + event.target.innerHTML)//和箭头函数一样
    },
    bind(){
        const buttons = document.querySelectorAll("button")
       console.log(buttons.length)
        const self = this
       buttons.forEach((ele)=>{//如果这里不用箭头函数，使用function，这时候this指向window,这里如果不用箭头函数，那就在上面定一个：const self = this
           ele.addEventListener('click',(event)=>{//如果这里使用function,this就指向ele
            console.log(this)//this指向Dom
            console.log(this.site + event.target.innerHTML)
           })
       })
     
    }
}
Dom.bind()

//如果大量需要用按钮，就会使用function,如果大量用父级方法，就用箭头函数
 
