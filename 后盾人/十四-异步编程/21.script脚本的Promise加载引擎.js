function createScript(src) {

  return new Promise((resove, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = function () {
      resove(script)
    }
    script.onerror = reject
    document.body.appendChild(script)
  })
}

createScript('./4.hd.js').then((value) => {

  hd()
  // createScript('./4.houdunren.js') 报错，找不到后面的houdunren
  return createScript('./4.houdunren.js')
}).then(value => {
  houdunren()
})