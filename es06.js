// in questo esercizio dato un array di studenti:
// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.
const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
];

studenti.forEach(element => {
    console.log(element.nome);
});

let unConNovanta = studenti.find(studente => studente.voto>=90)
console.log(unConNovanta);

function media(array) {
    const sum = array.reduce((a, studente)=> a + studente.voto,0)
    return Math.round(sum/array.length)
}
const mediaStudenti = media(studenti)
console.log(mediaStudenti);

const upperCase = studenti.map(studente => studente.nome.toUpperCase()) 
console.log(upperCase);

function over85(array) {
    return array.filter(voto => voto.voto>=85)
}

const sup85 = over85(studenti)
console.log(sup85);