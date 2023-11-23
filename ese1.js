// Unisci i due array utilizzando lo spread operator e crea un nuovo array chiamato mergedArray.

// Stampa a console l'array originale (array1 e array2) e l'array unito(mergedArray).

// Ordina l'array unito in ordine crescente e crea un nuovo array chiamato sortedArray.

// Stampa a console l'array unito ordinato (sortedArray).

// Filtra i numeri pari dall'array unito ordinato e crea un nuovo array chiamato evenNumbers.

// Stampa a console l'array contenente solo i numeri pari (evenNumbers).

const array1 = [3, 2, 1];
const array2 = [5, 4, 6];
// unisco i due array
const mergedArray = [...array1, ...array2]

console.log(mergedArray);
// li dispongo in ordine crescente
const sortedArray = mergedArray.sort((a,b) => a-b)

console.log(sortedArray);
// ne sommo il contenuto
const sumArray = sortedArray.reduce((a,sort)=> a+sort, 0)
console.log(sumArray);

// sommo soltanto i numeri pari

const sumOdd = sortedArray.filter(Number => Number % 2 ===0).reduce((a, Number) => a + Number, 0)
console.log(sumOdd);


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
copiaCibo[3] = "patate"
console.log(copiaCibo);

const ciboConA = copiaCibo.filter(item => item.includes("i"))

console.log("i cibi con la a sono : " + ciboConA);