
let user = {
  show() {
    return this.name
  }
}
let hd = { name: 'houdunren ' }
Object.setPrototypeOf(hd, user)
Object.getPrototypeOf(hd)