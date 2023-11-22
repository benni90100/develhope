function sum(...numbers) {
    return numbers.reduce((a, number) => a + number, 0)
}

const sumNumbers = sum(1, 5, 1, 6, 7, 32, 5, 68, 51, 38)
console.log(sumNumbers);