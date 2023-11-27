function performOperation(a, b, callback) {
    const c = a+b
    displayResult(c)
}

function displayResult(result) {
    if (typeof(result)==="number") {
        console.log(result);
    }else{
        console.log("error");
    }
}

performOperation(5, "3", displayResult);