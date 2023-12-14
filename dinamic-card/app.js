const cardContainer = document.querySelector(".card-container")
const input = document.querySelector("#input")
const button = document.querySelector("button")
const img = document.createElement("img")
const title = document.createElement("h2")

async function getData() {
    try {
        document.getElementById('loading-icon').style.display = 'block';
        const response = await fetch(`https://ringsdb.com/api/public/card/${input.value}.json`)
        const data = await response.json()
        img.setAttribute("src", `https://ringsdb.com/${data.imagesrc}`)
        img.classList.add("rotate-center", "card")
        title.innerText = data.name
        cardContainer.append( title, img)
        console.log(data);
        document.getElementById('loading-icon').style.display = 'none';
        
    } catch (error) {
        console.error(error);
    }

}
console.log(getData);

button.addEventListener("click", getData)