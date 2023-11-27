const obj = {
    name: "John",
    age: 15
}
function fetchDataFromAPI(obj) {
    return new Promise((resolve, reject) => {
        if (obj.age>18) {
            resolve(`ciao`)
        }
        else{
            reject("error")
        }
    })
}

fetchDataFromAPI(obj).then(data=>{
    console.log(data);
}).catch(("error") =>{
console.log("error");
})
