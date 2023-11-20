// funzione che genera un array formato da 10 numeri casuali da 1 a 100

// function randomArray() {
//     let randomArr = [];
// for (let i = 0; i < 11; i++) {
//     const element = Math.floor(Math.random()*(10+1));
//     randomArr.push(element);

// }
// return randomArr;
// }
// const random = randomArray();
// console.log(random);

// ora genero dei numeri casuali all'interno di un array attravewrso tre variabili argomento della funzione random
// una mi che decide il minimo, una il massimo e una il numero di elementi contenuti nell'array
// gli elementi dell'array non devono essere duplicati

// function random(min, max, n) {
//     const randmArray = [];
//     for (let i = 0; i < n; i++) {
//         const element = Math.floor(Math.random() * (max - min + 1) + min)
//         if (!randmArray.includes(element)) {
//             randmArray.push(element);
//         }
//     }
//     return randmArray
// }

// let array = random(5, 200, 50)
// console.log(array);


// Scrivi una funzione chiamata calcolaSomma che accetti un array di numeri e restituisca la somma di tutti gli elementi nell'array. 
// Successivamente, utilizza questa funzione per calcolare la somma di un array di numeri fornito.
// const arr = [315, 138, 1684]
// function sumArray(array) {
//     let sum = 0
//     array.forEach(element => {
//         sum += element;
//     });

//     return sum
// }

// const somma = sumArray(arr);
// console.log(somma);

// scrivo lo stesso codice ma utilizzando il ciclo for e le arrow function

// const arr = [3138, 113613, 13,1, 3, 13, 13, 81]

// function sum(array) {

//     let sum2 = 0;
//     for (i = 0; i < array.length; i++){
//         sum2 += array[i]
//     }
//     return sum2
// }
// let sum1 = sum(arr)

// console.log(sum1);

//filtra i numeri pari da un array

// let array = [12, 315, 38, 8438, 464, 6, 67]

// function isEven(arr) {
//     return arr.filter(arr => arr % 2 === 0)

// }
// let even= isEven(array)
// console.log(even);

// trova il numero maggiore
// const array = [12, 315, 38, 8438, 464, 6, 67]
//  function isMax(arr) {
//     let max =  arr[0]

//     arr.forEach(element => {
//         if (element > max) {
//             max = element;

//         }

//     });
//      return max
//  }
//  const maxNumber = isMax(array)
//  console.log(maxNumber);

//scrivi una funzione che unisca due array

// const array = [12, 315, 38, 8438, 464, 6, 67]
// const array1 = [3138, 113613, 13, 1, 3, 13, 13, 81]

// function arrayUnion(arr1, arr2) {
//     return [...arr1, ...arr2]

// }
// let a = arrayUnion(array, array1)
// console.log(a);

// Esercizio: Filtra le parole più lunghe
// Scrivi una funzione chiamata filtraParoleLunghe che accetti un array di stringhe e un numero intero 
// lunghezzaMinima.La funzione deve restituire un nuovo array contenente solo le parole dell'array 
// originale che hanno una lunghezza maggiore o uguale a lunghezzaMinima.

// function wordFilter(arr, lunghezzaMinima) {
//     return arr.filter(parola => parola.length >= lunghezzaMinima)

// }
// const array =["elefante", "leone", "giraffa", "zebra"]

// const word = wordFilter(array, 3);
// console.log(word);

// Esercizio: Capitalizza le prime lettere
// Scrivi una funzione chiamata capitalizzaPrimaLettera che accetti una stringa e 
// restituisca la stessa stringa con la prima lettera di ogni parola convertita in maiuscolo.
// str= "ciao"
// function capitalize(myString) {
//     return text = myString.split(" ").map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(' ');

// }
// const textCap = capitalize(str)
// console.log(textCap);


// for (let i = 0; i <= 100; i++) {
// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizz, buzz");
// }else if (i % 3 === 0) {

//     console.log("fizz");
// } else if(i % 5 === 0){
//     console.log("buzz");
// }
//     switch (true) {
//         case i % 3 === 0 && i % 5 === 0:
//             console.log("fizzbuzz");

//             break;
//         case i % 3 === 0:
//             console.log("fizz");
//             break;
//         case i % 5 === 0:
//             console.log("buzz");
//             break;
//         default:
//             console.log("nessuno");
//             break;
//     }
// }

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer' },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman' },
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer' },
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer' },
];


function youngStudent() {
    youngStud = students.filter(student => student.age === Math.min(...students.map(s => s.age)))
    
    return youngStud
}

const yougest = youngStudent();
console.log(yougest);