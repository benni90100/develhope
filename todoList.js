const add = document.querySelector("#add")
const input = document.querySelector("#input")
const ul = document.querySelector(".list")
const reset = document.querySelector("#svuota")

document.addEventListener("DOMContentLoaded", () => {
    const todo = []
    const li = document.createElement("li")
    function todoAdd() {
        // todo.push(value)
        let value = input.value
        // const li = document.createElement("li")
        li.textContent=value
        // li.innerHTML = `${value}<button class="delete">delete</button>`
        ul.appendChild(li)
        input.value = ""
        const button = document.querySelector(".delete")
        // button.addEventListener("click",()=>{
        //     console.log("done");
        //     li.classList.add("done")

        // })
    }
    function resetTodo() {
        li.innerHTML = ""
    }
    add.addEventListener("click", todoAdd)
    reset.addEventListener("click", resetTodo)
}
)
