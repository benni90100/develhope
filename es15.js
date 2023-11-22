// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e 
// restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

function filterOutOddsilter(...numbers) {
    return numbers.filter(number => number % 2 === 0)
}

const outOdds = filterOutOddsilter(315, 1, 38, 1, 8, 97, 83, 51, 387)
console.log(outOdds);

