const container = document.querySelector(".container")

async function getData(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const posts = await res.json()

        posts.forEach(post => {
            console.log(post);
            const div = document.createElement('div')
            const name = document.createElement('h3')
            const email = document.createElement('p')
            const body = document.createElement('p')
            const button = document.createElement("button")
            name.textContent = post.name
            email.textContent = post.email
            body.textContent = post.body
            button.textContent = "read me"

            div.append(name, body, email, button)
            div.classList.add('card')
            button.classList.add("my-button")

            container.appendChild(div)
        });

    } catch (error) {
        console.error(error)
    }
}

getData(2)