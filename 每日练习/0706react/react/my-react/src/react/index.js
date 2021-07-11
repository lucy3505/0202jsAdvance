import $ from 'jquery'
import createElement from './createElement'
import getUnit from './getUnit'

function render(ele,container){
  const createUnit = getUnit(ele)
  let markup = createUnit.getmarkUp(React.rootId)
  $(container).html(markup)
}

let React = {
  render,
  rootId:"1",
  createElement
}

export default React