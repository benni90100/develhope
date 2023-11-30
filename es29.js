const obj = {
    name: "John",
    age: 19
}
function fetchDataFromAPI(obj) {
    return new Promise((resolve, reject) => {
        if (obj.age>18) {
            resolve(`puoi bere un drink ${obj.name}`)
        }
        else{
            reject(`aspetta di compiere 18 anni ${obj.name}`)
        }
    })
}

fetchDataFromAPI(obj)
.then(data=>{
    console.log(data);
})
.catch((error) =>{
console.log(error);
})
