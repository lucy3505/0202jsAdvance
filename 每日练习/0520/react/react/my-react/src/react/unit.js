



class Unit{
    constructor(element){
        this.currentElement = element
    }
}

class ReactTextUnit extends Unit{
    getmarkUp(rootId){
        this._rootId = rootId
        return `<span data-reactid = ${rootId}>${this.currentElement}</span>`
    }
}

class ReactNativeUnit extends Unit {
    getmarkUp(rootId){
        this._rootId = rootId
        const {type,props} = this.currentElement
        let startStr = `<${type} data-reactid=${rootId} `
        let contentStr
        for(var propName in props){
            if(propName==='children'){
                contentStr=props[propName].map((child,idx)=>{
                     return createReactUnit(child).getmarkUp(`${rootId}.${idx}`)
                }).join('')
               

            }else if(propName.slice(2).test){


            }else{
                startStr+=` ${propName}=${props[propName]}`
            }
        }
        

        let endStr = `</${type}>`

        return startStr +'>' + contentStr +endStr
    }
}

class ReactClassUnit extends Unit{
    getmarkUp(rootId){
        this._rootId = rootId
        const {type:Component,props} = this.currentElement
  
        for(const key in props){
            if(key==='children'){
              props.children = props[key].map((item,idx)=>
              createReactUnit(item).getmarkUp(`${rootId}.${idx}`)
              ).join(' ')
            }
      
          } 
        let componentInstance = new Component(props)
        let reactComponentRender = componentInstance.render()
        let reactUnitInstance = createReactUnit(reactComponentRender)
        let markup = reactUnitInstance.getmarkUp(rootId)
        return markup
    }
}


function createReactUnit(element) {
    if(typeof element === "string" ||typeof element === "number"){
        return new ReactTextUnit(element)
       
    }
    if(typeof element === "object" &&typeof element.type === "string"){
        return new ReactNativeUnit(element)
       
    }
    if(typeof element === "object" &&typeof element.type === "function"){
        return new ReactClassUnit(element)
       
    }
}


export default createReactUnit


// {type:div,
//  props:{
//      name:'fds'
//      children:['fdse',{type:'span',props:{
//             name:
// }}]
//  }

// }