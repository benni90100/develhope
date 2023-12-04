// Convertire la seguente funzione basata su callback in una funzione basata su Promise.

function promiseBasedFunction(arg1, arg2) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = arg1 + arg2;

            if (result % 2 === 0) {
                resolve(result)
            } else {
                reject("result i not odd!")
            }
            return result
        }, 1000)


    });
}
promiseBasedFunction(5, 3)
    .then(result => console.log(result))
    .catch(err => console.error(err))



