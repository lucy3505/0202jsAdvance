function request() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.send()
    xhr.onload = function () {
      if (this.state === 200) {
        resolve(JSON.parse(this.response))
      } else {
        reject('fail')
      }
    }
    xhr.onerror = function () {
      reject(this)
    }
  })
}