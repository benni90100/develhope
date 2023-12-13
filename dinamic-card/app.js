const cardContainer = document.querySelector(".card-container")

async function getData() {
    try {
        const response = await fetch("https://ringsdb.com/api/public/card/01001.json")
        const data = await response.json()

        const img = document.createElement("img")
        img.setAttribute("src", `https://ringsdb.com/${data.imagesrc}`)
        const title = document.createElement("h2")
        title.innerText = data.name
        cardContainer.append( title, img)
        console.log(data);
    } catch (error) {
        console.error(error);
    }

}
getData()