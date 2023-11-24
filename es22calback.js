// Scrivi una funzione chiamata doubleArray che accetta un array e una funzione di callback come argomenti.
// doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo 
// array con i valori trasformati.

//versione più breve che ho trovato, utilizzando map si evita la creazione di un nuovo array e il ciclo foreach
//per iterare gli elementi
function doubleArray(arr, callback) {
    let double = arr.map(callback)
    return double

}
function doubleValue(num) {
    return num * 2;
}
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]

//scrivo comunque la risoluzione dell'esercizio con il foreach
// function doubleArray(arr, callback) {
//     let double = []
//     arr.forEach(Element => {
//         double.map(callback(Element))

//     });
//     return double

// }