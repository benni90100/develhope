// function performOperation(a, b, callback) {
//     const c = a + b
//     try {
//         const c = a + b
//         callback(null, c)
//     } catch (error) {
//         callback(new Error("error"))
//     }
//     callback(c)
// }

// function displayResult(result) {
//     if (typeof (result) === "number") {
//         console.log(result);
//     } else {
//         console.log("error");
//     }
// }

// performOperation(5, 5, displayResult);



function performOperation(a, b, cb) {
    const c = a + b
    cb(c)
}

function displayResult(result) {
    if (typeof (result) === "number") {
        console.log(result);
    } else {
        console.log("error");
    }
}

performOperation(5, 5, displayResult);

// function stepOne(cb) {
//     setTimeout(() => {
//         console.log("step1");
//         cb()
//     }, 2000);
// }
// function stepTwo(cb) {
//     setTimeout(() => {
//         console.log("step2");
//         cb()
//     }, 1500);
// }
// function stepTree() {
//     setTimeout(() => {
//         console.log("step3")

//     }, 1000);
// }

// stepOne(() =>  stepTwo(() =>  stepTree() ) )


// function myPromise(a) {
//     return new Promise((res, rej) => {
//         if (a > 10) {
//             setTimeout(() => {
//                 res("promise ok")
//             }, 2000);
//         } else {
//             setTimeout(() => {
//                 rej("promise ko")
//             }, 2000);
//         }
//     })
// }

// myPromise(8)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))