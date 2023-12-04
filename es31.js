// function log() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("ciao a tutti")
//         }, 2000);
//     })
// }
// log()
// .then(data=> console.log(data))
// .catch(err=> console.error(err))


// potevamo anche non scrivere la funzione, in questo caso:
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ciao a tutti")
    }, 2000);
})
.then(data=>console.log(data))
.catch(err=>console.error(err))