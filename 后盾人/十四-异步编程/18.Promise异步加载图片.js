function loadImg(src) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = src
    img.onload = resolve(img)


    img.onerror = reject
  })
}

loadImg('image/houdunren.gif').then(img => {
  document.body.appendChild(img)
}, reject => {
  console.log(re)
})