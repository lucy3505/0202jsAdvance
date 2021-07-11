
import createReactUnit from './unit'
import createElement from './element'
import Component from './component'
import $ from 'jquery'
const React = {
    render,
    reactRootIndex:0,
    createElement,
    Component
}

function render(element,container){

        // var markUp = `<span data-reactid=${React.reactRootIndex}>${element}</span>`
        var reactUnitInstance=createReactUnit(element)
        var markup = reactUnitInstance.getmarkUp(React.reactRootIndex)

    $(container).html(markup)

}

export default React