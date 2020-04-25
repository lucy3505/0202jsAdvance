//promise 其他API

// Promise.resolve  默认是成功得

function hd() {}
hd.site = "houdunren.com"
//相当于
Promise.hd = function(value) {
    return new Promise(resolve => {
        resolve(value)
    })
}


function query(name) {
    const catche = query.cache || (query.cache = new Map())
    if(cache.has(name)) {
        console.log('走缓存了')
        return Promise.resolve(cache.get(name))
    }
    return ajax(`http://baidu.com`).then(
        user => {
            cache.set(name,user)
            console.log('没走缓存')
            return user
        }
    )
}


Promise.resolve('houdunren').then(value => {
    console.log(value)
}
})