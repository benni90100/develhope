let tempoRimanente = 10;

const contoAllaRovescia = ()=> {
    if (tempoRimanente===10) {
        console.log("conto alla rovescia in corso");
        
    }
    
    tempoRimanente--
    console.log(tempoRimanente);
    if (tempoRimanente===0) {
        console.log("buon anno...");
        clearInterval(tempoScaduto)
    }
}

let tempoScaduto = setInterval(contoAllaRovescia, 1000);






   

    

