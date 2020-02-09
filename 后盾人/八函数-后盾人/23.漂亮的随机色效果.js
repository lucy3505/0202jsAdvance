//体验bind

function Color(elem){
    this.elem = elem;
    this.colors=['#1abc9c','#f1c40f','#9b59b6']
    this.run = function(){
        setInterval(function(){
            console.log(this)//原来是window，有了Bind,this变为color
            let i = Math.floor(Math.random()*this.colors.length)
            console.log(i)
            this.elem.style.backgroundColor=this.colors[i]
        }.bind(this), 1000);
    }
}
let obj = new Color(document.body)
obj.run()