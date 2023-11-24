let tempoRimanente = 11;

const contoAllaRovescia = ()=> {
    tempoRimanente--
    console.log(tempoRimanente);
    if (tempoRimanente===0) {
        console.log("buon anno...");
        clearInterval(tempoScaduto)
    }
}
console.log("conto alla rovescia in corso");

let tempoScaduto = setInterval(contoAllaRovescia, 1000);






   

    

