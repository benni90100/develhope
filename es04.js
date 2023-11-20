
const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

function esclamativo(array) {
  array.forEach(element => {
    console.log(`${element}!`);
  });
}
esclamativo(fruits)