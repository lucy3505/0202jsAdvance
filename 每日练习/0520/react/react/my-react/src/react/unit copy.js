
class Unit{
    constructor(element){
        this.currentElement = element
    }
}

class ReactTextUnit extends Unit{//这里不写constructor自动把参数传给父类
    getMarkUp(rootId){
        this._rootId = rootId
        return `<span data-reactid=${rootId}>${this.currentElement}</span>`
    }
}

class ReactNativeUnit extends Unit{
    getMarkUp(rootId){
        this._rootId = rootId
        //拼接渲染的内容
        let {type,props} = this.currentElement
        let tagStart = `<${type} data-reactid ="${rootId}"`
        let tagEnd = `</${type}>`
        let contentStr 
        for (let propName in props){
            if(propName === "children"){
                contentStr = props[propName].map((child,idx)=>{
                    //递归，循环子节点
                    const childInstance = createReactUnit(child)
                    return childInstance.getMarkUp(`${rootId}.${idx}`)
                }).join('')
            }else{
                tagStart += `${propName}=${props[propName]}`
            }
        }
        return tagStart + ">"+contentStr + tagEnd
    }
}

function createReactUnit(element){
    if(typeof element == "string"||typeof element =="number"){
        return new ReactTextUnit(element)
    }
     if(typeof element == "object"||typeof element.type =="string"){
        return new ReactNativeUnit(element)
    }

}

export default createReactUnit