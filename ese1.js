// Unisci i due array utilizzando lo spread operator e crea un nuovo array chiamato mergedArray.

// Stampa a console l'array originale (array1 e array2) e l'array unito(mergedArray).

// Ordina l'array unito in ordine crescente e crea un nuovo array chiamato sortedArray.

// Stampa a console l'array unito ordinato (sortedArray).

// Filtra i numeri pari dall'array unito ordinato e crea un nuovo array chiamato evenNumbers.

// Stampa a console l'array contenente solo i numeri pari (evenNumbers).

// const array1 = [3, 2, 1];
// const array2 = [5, 4, 6];
// unisco i due array
// const mergedArray = [...array1, ...array2]

// console.log(mergedArray);
// li dispongo in ordine crescente
// const sortedArray = mergedArray.sort((a,b) => a-b)

// console.log(sortedArray);
// ne sommo il contenuto
// const sumArray = sortedArray.reduce((a,sort)=> a+sort, 0)
// console.log(sumArray);

// sommo soltanto i numeri pari

// const sumOdd = sortedArray.filter(Number => Number % 2 ===0).reduce((a, Number) => a + Number, 0)
// console.log(sumOdd);


// Esercizio: Manipolazione degli Array con lo Spread Operator
// Crea un array di stringhe chiamato frutta contenente almeno tre tipi di frutta.
// Crea un secondo array di stringhe chiamato verdura contenente almeno tre tipi di verdura.
// Unisci i due array utilizzando lo spread operator e crea un nuovo array chiamato cibo.
// Aggiungi almeno altri due elementi di tuo gusto all'array cibo senza modificare gli array originali.
// Stampa a console l'array originale frutta, l'array originale verdura, e l'array unito cibo.
// Ordina l'array cibo in ordine alfabetico.
// Stampa a console l'array cibo ordinato.
// Crea un nuovo array chiamato ciboMaiuscolo contenente tutte le stringhe dell'array cibo convertite in maiuscolo.
// Stampa a console l'array ciboMaiuscolo.
// Utilizzando lo spread operator, crea un nuovo array chiamato copiaCibo che sia una copia esatta dell'array cibo.
// Modifica un elemento nell'array copiaCibo e stampa a console sia l'array originale cibo che la copia modificata copiaCibo.
// Filtra l'array cibo includendo solo gli elementi che contengono la lettera 'a'. Crea un nuovo array chiamato ciboConA.
// Stampa a console l'array ciboConA.

const frutta = ["banana", "nespola", "albicocca"]
const verdura = ["spinaci", "cavolo", "melanzane"]

const cibo = [...frutta, ...verdura]

cibo.unshift("carciofi")
cibo.push("piselli")
console.log(frutta);
console.log(verdura);
console.log(cibo);

cibo.sort()
console.log(cibo);

const ciboMaiuscolo = cibo.map(item => item.toUpperCase())

console.log(ciboMaiuscolo);

const copiaCibo = [...cibo]
console.log(copiaCibo);
// copiaCibo[3] = "patate"
let [, patate] = copiaCibo
patate = "patate"
console.log(copiaCibo);

const ciboConA = copiaCibo.filter(item => item.includes("i"))

console.log("i cibi con la a sono : " + ciboConA);

// carta forbice e sasso

// function morra() {
//     let player1 = Math.floor(Math.random() * 3+1)
//     let player2 = Math.floor(Math.random() * 3+1)

//     if (player1 === 1) {
//         player1 = "sasso"

//     } else if (player1 === 2) {
//         player1 = "forbici"

//     } else {
//         player1 = "carta"

//     }
//     if (player2 === 1) {
//         player2 = "sasso"

//     } else if (player2 === 2) {
//         player2 = "forbici"

//     } else {
//         player2 = "carta"

//     }

//     if (player1==="sasso" && player2 === "forbici") {
//         console.log(`${player1} vince contro ${player2} il vincitore è player1`);
//     } 
//     else if(player1==="sasso" && player2 === "carta") {
//         console.log(`${player2} vince contro ${player1} il vincitore è player2`);
//     } 
//      else if (player1==="sasso" && player2 === "sasso") {
//         console.log(`pareggio`);
//     }
//     else if (player1 === "forbici" && player2 === "carta") {
//         console.log(`${player1} vince contro ${player2} il vincitore è player2`);
//     } 
//     else if (player1 === "forbici" && player2 === "sasso") {
//         console.log(`${player2} vince contro ${player1} il vincitore è player2`);
//     } 
//     else if (player1 === "forbici" && player2 === "forbici") {
//         console.log("pareggio");
//     } 
//     else if (player1 === "carta" && player2 === "sasso") {
//         console.log(`${player1} vince contro ${player2} il vincitore è player1`);
//     } 
//     else if (player1 === "carta" && player2 === "forbici") {
//         console.log(`${player2} vince contro ${player1} il vincitore è player2`);
//     } 
//     else if (player1 === "carta" && player2 === "carta") {
//         console.log("pareggio");
//     } 

// }
// morra()

//generazione dati casuali



// class persons {
//     constructor(name, age, hobby) {

//         this.name = name;
//         this.age = age;
//         this.hobby= hobby;
//     }
// }


// const names = ["alice", "barbara", "roberto", "antonio", "pietro", "nino"]
// const hobby = ["pesca", "nuoto", "musica", "calcio", "informatica", "matematica"]
// const age = [18, 51, 46, 35, 8, 49]
// function startGeneration() {
//     let peaple = []

//     for (let i = 0; i < hobby.length; i++) {
//         let person =new persons(names[i], age[i], hobby[i])
//         peaple.push(person)
//     }

//     return peaple
// }
// const peaples = startGeneration()


// function etaMedia(peaple) {
//     const sumAgePeaple = peaples.reduce((a, peaple) => a + peaple.age, 0)
//     return Math.round(sumAgePeaple / peaples.length)
// }
// let eta = etaMedia()
// setTimeout(() => {
//     console.log(peaples);
// }, 500);
// console.log(`l'età media è ${eta}`);

// class Book {
//     constructor(autore, titolo, pagine, anno) {
//         this.autore = autore
//         this.titolo = titolo
//         this.pagine = pagine
//         this.anno = anno
//     }
// }

// function createbook() {
//     const books = [
//         new Book("connelly", "la ragazza di polver", 457, 1945),
//         new Book("dan brown", "angeli e demoni", 600, 1960),
//         new Book("philip k dick", "la svastica sul sole", 260, 1895),
//         new Book("umberto eco", "il nome della rosa", 457,1977)
//     ]
//     return books
// }
// const totaBook = createbook()
// function calcolaPagineMedie() {
//     let sum = totaBook.reduce((a, totaBook)=> a + totaBook.pagine,0)
//     return sum /totaBook.length
    
// }
// function libroPiuRecente() {
//     const annoMax = Math.max(totaBook.anno)
//     return totaBook.filter(totaBook => totaBook.anno===annoMax)

// }
// const media = calcolaPagineMedie()
// console.log(media);
// console.log(libroPiuRecente());
// console.log(totaBook);

