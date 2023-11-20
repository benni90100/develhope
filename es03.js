const sum =  (a, b) => {
    return a + b;
}

const subtract =  (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const log = function (value) {
    console.log(value);
}
const sum1 = sum(2,4)
const sum2 = sum(5,2)
const moltiply = multiply(sum1, sum2)
const sub = subtract(moltiply, 2)
const result = divide (sub, 5)

console.log(result);