
import $ from 'jquery'
import createReactUnit from './unit.js'
import createElement from './element'


let React = {
    render,
    nextRootIndex:0,
    createElement
    
}

//给每个元素  添加一个属性，为了方便获取到这个元素
function render(element,container){
    //element可能有很多角色，把判断写成一个工厂函数，来创建对应的react元素
    let createReactUnitInstance =  createReactUnit(element)
   let markup =createReactUnitInstance.getMarkUp(React.nextRootIndex)
    // let markup =`<span data-reactid=${React.nextRootIndex}>${element}</span>`
    $(container).html(markup)
}

export default React