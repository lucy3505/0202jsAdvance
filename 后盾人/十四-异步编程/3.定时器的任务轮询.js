function interval(callback,delay){
    let id = setInterval(() => {
            callback(id)
    }, (delay);
}