// Funzione per generare un numero casuale in un intervallo specifico
function getRandomNumber(min, max) {
    // Math.random() restituisce un numero compreso tra 0 (incluso) e 1 (escluso)
    // Moltiplicando per (max - min + 1) si ottiene un numero tra 0 e (max - min)
    // Aggiungendo min si ottiene un numero tra min e max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Esempio: genera un numero casuale tra 1 e 10
let numeroCasuale = getRandomNumber(1, 10);

console.log(numeroCasuale);