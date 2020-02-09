//有一个按钮
let Dom={
    site:'后盾人',
    handleEvent:function(event){
        console.log(event.target)
         console.log(this.site + event.target.innerHTML)//和箭头函数一样
    },
    bind(){
        const button = document.querySelector("button")
        const self = this
       console.log(button)
       button.addEventListener('click',(event)=>{
           console.log(this.site)//用了箭头函数这里得this就会指向Dom，否则这个this指向得是button这个对象
           //?这时候我这个this又要指向Dom,使用site，又想用button对象
           /* 
           ^方法一：使用箭头函数，this指向外部得对象，同时函数里有个event对象，event.target可以取得button这个对象
           ^方法二：不使用箭头函数，那么function里得this就是指向button,Dom这个对象得取得可以使用const self= this 
           ^方法三：这个对象里写个特殊方法handleEvent，这个特殊方法可以把事件行为，放到第二个参数里：
           button.addEventListener("click",this)
           这个时候，点击button得时候，系统会自动调用handleEvent方法
            */
            console.log(this.site + event.target.innerHTML)
            console.log(self.site + this.innerHTML)
           
       })//!可以理解为下面这个代码
       
        // button.onclick=function(){
           //给Button这个对象添加了一个onclick方法,这个function就是对象得属性了，所以使用addEventListener里得function是个方法，而不是函数，里面得this指向得就是Button对象
        //    console.log(this)
    //    }
        
      
    
    }
}
Dom.bind()

//如果大量需要用按钮，就会使用function,如果大量用父级方法，就用箭头函数
 
