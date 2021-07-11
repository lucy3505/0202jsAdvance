
class  Unit{
   constructor(ele){
    const {type,props} = ele
    this.type = type
    this.props = props
  }
}


class StringReact{
  constructor(ele){
    this.ele = ele
  }
  getMarkUp(rootId){
    this.rootId = rootId
    console.log(this.ele)
    return `<span react-id=${rootId}>${this.ele}</span>`
    
  }
}

class NativeReact extends Unit{
  getMarkUp(rootId){
    this.rootId = rootId
    let props = this.props
    let startStr = `<${this.type} react-id=${rootId}`
    let propContent = ''
    let eleContent 
   for(let key in props){
    if(key === "children"){
       eleContent = props[key].map((item,index)=>{
       return getEletype(item).getMarkUp(`${rootId}.${index}`)
      }).join(' ')
    }else{
      propContent += ` ${key}=${props[key]}`
    }
   } 
   let endStr = `</${this.type}>`
   let res = startStr + propContent + '>'+eleContent + endStr
   return res
    
  }

}

class CompositeReact extends Unit{
  getMarkUp(rootId){
    this.rootId = rootId
    const {type:Component,props} = this.props
    const children = props.children
    let renderContent = new Component(props).render()
    let renderContentMarkUp = getEletype(renderContent).getMarkUp(rootId)
    return renderContentMarkUp
  }

}


function getEletype(ele){
  if(typeof ele === "string"||typeof ele === "number"){
    return new StringReact(ele)
  }
  if(typeof ele === "object" && typeof ele.type ==="string"){
    return new NativeReact(ele)
  }
  if(typeof ele === " object" && typeof ele.type === "function"){
    return new CompositeReact(ele)
  }

}


export default getEletype