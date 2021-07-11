
import createReactUnit from "./unit.js";
class Component{
    constructor(props,id){
        this.props= props
        this.id = id
        let content = this.props.children.map((item,idx)=>{return createReactUnit(item).getmarkUp(idx)
           
        })
        content.join('')
        this.props.children=`${content}`
    }
    setState(){
        console.log('setState')
    }
}


export default Component