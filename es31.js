function log() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ciao a tutti")
        }, 2000);
    })
}
log()
.then(data=> console.log(data))
.catch(err=> console.error(err))