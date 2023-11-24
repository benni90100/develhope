// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e 
// restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

// function filterOutOddsilter(...numbers) {
//     return numbers.filter(number => number % 2 === 0)
// }

// const outOdds = filterOutOddsilter(315, 1, 38, 1, 8, 97, 83, 51, 387)
// console.log(outOdds);

const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);
function adultFilter(person) {
    const adults = person.filter(person => person.age >= 18);
    return adults;
}
console.log(persons);
console.log(adults);