function performOperation(a, b, callback) {
    const c = a + b;
    return displayResult(c)
}

function displayResult(result) {
    console.log(result);
}

performOperation(5, 3, displayResult);