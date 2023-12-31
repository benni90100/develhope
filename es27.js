// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona,
//  come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati.
//   -Utilizzare setTimeout per simulare il ritardo dell'operazione.

const obj = {
    name: "John",
    age: 30
}


function fetchDataFromAPI(callback) {
    return new Promise((resolve, reject) => {
        resolve(obj)
    })
}

function handleData(data) {
    return console.log(`${data.name} ${data.age}`);
}

fetchDataFromAPI(handleData);