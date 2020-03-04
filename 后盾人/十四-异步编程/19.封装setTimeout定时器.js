function setTime(delay) {
  return new Promise((resolve, reject) => {
    var id = setTimeout(() => {
      resolve(id)
    }, delay)
  })
}

setTime(2000).then((value) => {
  console.log('wash')
  return setTime(1000)
}).then(value => {
  console.log('put')
})
