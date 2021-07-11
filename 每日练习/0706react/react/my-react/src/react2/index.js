import $ from 'jquery'
import createElement from './createElement'
import getEletype from './getEletype'
const React = {
  render,
  rootId:1,
  createElement
}

function render(ele,container){
  let eleType = getEletype(ele)
  let markup = eleType.getMarkUp(React.rootId)

  // let markup = `<span react-id=${React.rootId}>${ele}</span>`

  $(container).html(markup)

}




export default React