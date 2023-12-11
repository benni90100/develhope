const obj = {
    name: "John",
    age: 17
}
function fetchDataFromAPI(obj) {
    return new Promise((resolve, reject) => {
        if (obj.age > 18) {
            resolve(`puoi bere un drink ${obj.name}`)
        }
        else {
            reject(`aspetta di compiere 18 anni ${obj.name}`)
        }
    })
}

// fetchDataFromAPI(obj)
async function getData() {
    try {
        const get = await fetchDataFromAPI(obj)
        console.log(get);
    } catch (error) {
        console.log(error);
    }
}
getData()