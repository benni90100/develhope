// Utilizza setTimeout per chiamare la funzione "mostraPromemoria" dopo un ritardo di 5 secondi.
// Prima che scadano i 5 secondi stampa in console: "Il promemoria è in fase di impostazione".
function mostraPromemoria() {
    console.log("Promemoria: È ora di fare una pausa!");
}

function inPreparazione() {
    console.log("il promemoria è in fase di impostazione");
    
}

setTimeout(mostraPromemoria, 5000);
setTimeout(inPreparazione, 1000);