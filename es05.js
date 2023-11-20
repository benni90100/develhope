const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

const person2 = person1;
person2.firstName = "simon"

// Modify the property `firstName` of the `person2` in "Simon".
//modificando il valore di person2 automaticamente viene richiamato quello di person 1 perchè abbiamo dichiarato che 
//person2 = person1 quindi le due const puntano allo stesso oggetto
console.log(person1);
console.log(person2);