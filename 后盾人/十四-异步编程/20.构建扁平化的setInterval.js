



function interval(delay) {

  id = setInterval(() => {
    return new Promise((resolve, reject) => {
      resolve(id)
    })
  }, 100).then(id => {
    let el = document.querySelector('div')
    let left = parseInt(window.getComputedStyle(el).left)
    el.style.left = left + 10 + "px"
  })

}

interval(100)

//正确写法

function interval(delay = 1000) {
  return new Promise(resolve => {
    let id = setInterval(() => {
      console.log(1)
    },delay)
  })
}
interval(100)


