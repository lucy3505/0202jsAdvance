class Animation{
  show(){
    this.style.display = "block"
  }
  hide(){
    this.style.display = "none"
  }
  background(){
    this.style.background = "#aaa"
  }
}
class Tab extends Animation{
  constructor(args){
    super()
    args = Object.assign({el:null,link:'a',section:'section'})
    
    this.el = document.querySelector(args['el'])
    this.links = document.querySelectorAll(args['link'])
    this.sections = document.querySelectorAll(args['section'])
  }
  bindEvent(){
    this.links.forEach((item)=>{
      item.addEventLinstener()
    })
  }

}