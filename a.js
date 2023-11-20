const studenti = [
    { nome: "Alice", eta: 17, mediaVoti: 8.5 },
    { nome: "Bob", eta: 22, mediaVoti: 7.8 },
    { nome: "Charlie", eta: 16, mediaVoti: 9.2 },
    { nome: "David", eta: 23, mediaVoti: 6.5 }
];

function eMaggiorenne(array) {
    return array.filter(studente => studente.eta %2 ===0)
}

let magg = eMaggiorenne(studenti)
console.log(magg);