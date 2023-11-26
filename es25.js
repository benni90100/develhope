function runCallbacks(callbacks) {
    callbacks.forEach(callback => {
        callback()
    });
}
function firstCallback() {
    console.log(1);
}
function secondCallback() {
    console.log(2);
}

function thirdCallback() {
console.log(3);
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);