

class Animation {

  show() {
    this.style.display = "block"
  }
  hide() {
    this.style.display = "none"
  }
  background(color) {
    this.style.background = color
  }
}

class Tab extends Animation {
  constructor({ el, link, section }) {
    super()
    this.el = document.querySelector(el)
    this.links = document.querySelectorAll('a')
    this.sections = this.el && this.el.querySelectorAll('section')
    // debugger
  }
  run() {
    this.hideAll()
    this.show.call(this.sections[0])
    this.clearBackground()
    this.background.call(this.links[0], '#e67e22')
    this.bindEvent()

  }
  bindEvent() {
    this.links.forEach((item, index) => {

      item.addEventListener('click', () => {  //如果这里用function,里面的this就是item对象，用箭头里面this指向new Tab()，可以找到父级方法
        console.log(item)
        // console.log(this)
        this.clearBackground()
        this.background.call(item, '#e67e22')
        this.hideAll()
        this.show.call(this.sections[index])

      })
    })
  }

  hideAll() {
    this.sections.forEach((item, index) => {
      this.hide.call(item)
    })
  }
  clearBackground() {
    this.links.forEach((item, index) => {
      this.background.call(item, '#95a5a6')
    })
  }



}

new Tab({ el: '.tab1', link: 'a' }).run()