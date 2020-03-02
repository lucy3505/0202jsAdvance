// class Tab {
//   constructor(el) {
//     this.el = document.querySelector(el)
//   }
// }

// new Tab('.tab1')
function  extend(sub,parent) {
  sub.prototype=Object.create(parent.prototype)
  sub.prototype.constructor = sub
}
class Animation{
  show(){
    this.style.display = "block"
  }
  hide(){
    this.style.display="none"
  }
  background(color){
    this.style.background = color
  }
}

class Tab extends Animation {
  constructor(args){
    super()
    args=Object.assign({el:null,link:'a',cb:null,section:'section'},args)
    this.tab = document.querySelector(args['el'])
    this.links = this.tab.querySelectorAll(args['link'])
    this.section = this.tab.querySelectorAll(args['section'])
    this.cb = args['cb']
  }
  run(){
    this.bindEvet()
    this.reset()
    this.action(0)
  }
  bindEvet(){
    this.links.forEach((item,i)=>item.addEventListener('click',()=>{
      this.reset()
      this.action(i)
    }))
  }
  action(i){
    this.background.call(this.links[i],'#e67e22')
    this.show.call(this.section[i])
  }
  reset(){
    this.links.forEach((item,i)=>{this.background.call(this.links[i],'#95a5a6')
    this.hide.call(this.section[i])
    })
    
  }
}
new Tab({
  el:".tab1",
}).run()