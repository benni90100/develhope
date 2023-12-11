// Convertire la seguente funzione basata su callback in una funzione basata su Promise.

function promiseBasedFunction(arg1, arg2) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = arg1 + arg2;
            if (result % 2 !== 0) {
                resolve(result)
            } else {
                reject("result i not odd!")
            }
            return result
        }, 1000)


    });
}
function secondPromise(num) {
    return new Promise((resolve, reject) => {
        const arr=[1,2,3,4,5,6,7,8,9,10]
        const arrMolt = arr.map(n=> num*n )
        setTimeout(() => {
            resolve(arrMolt)
        }, 2000);
        
    })
}
async function getBases() {
    try {
        const result = await promiseBasedFunction(2, 5)
        const moltiplicateArray = await secondPromise(result)
        console.log(result);
        console.log(moltiplicateArray);
    } catch (error) {
        console.error(error);
    }
}

getBases()

// promiseBasedFunction(5, 3)
//     .then(result => console.log(result))
//     .catch(err => console.error(err))