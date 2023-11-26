function delay(callback, delayTime) {
    setTimeout(() => {
        callback()
    }, delayTime);
}
function sayHi() {
    console.log("Hi, there!");
}
delay(sayHi, 2000); // Should log "Hi, there!" after a 2-second delay.


//possiamo anche passare la funzione di callback come funzione anonima nell'argomento della nostra funzione utilizzndo
//questa sintassi, ovviamente in questo caso la funzione sayHi non dovrà essere scritta
// delay(()=>{
//     console.log("Hi, there");
// }, 2000); Should log "Hi, there!" after a 2-second delay.
