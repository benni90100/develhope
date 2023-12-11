function log() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ciao a tutti")
        }, 2000);
    })
}
// log()
// .then(data=> console.log(data))
// .catch(err=> console.error(err))

async function getLog() {
    try {
        const logGet = await log()
        console.log(logGet);
    } catch (error) {
        console.error(error);
        
    }
}
getLog()


// potevamo anche non scrivere la funzione, in questo caso:
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("ciao a tutti")
//     }, 2000);
// })
// .then(data=>console.log(data))
// .catch(err=>console.error(err))

