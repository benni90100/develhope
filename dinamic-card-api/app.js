const container = document.querySelector(".container")
async function fetchCard() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data);
    
        // console.log(data);
    for (let i = 0; i < 11; i++) {
            console.log(data)
                container.innerHTML += `<div class="card" style="width: 18rem">
            <div class="card-body">
                <h2 class="card-title">${data[i].title}</h2>
                <p class="card-text">${data[i].body}</p>
            </div>
        </div>
        ` 
        }
}
fetchCard()