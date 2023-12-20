const add = document.querySelector("#add")
const input = document.querySelector("#input")
const ul = document.querySelector(".list")
const reset = document.querySelector("#svuota")

document.addEventListener("DOMContentLoaded", () => {
    const todo = []
    
    function todoAdd() {
        const li = document.createElement("li")
        let value = input.value
        li.textContent=value
        ul.appendChild(li)
        input.value = ""
        const button = document.querySelector(".delete")
        button.addEventListener("click",()=>{
            console.log("done");
            li.classList.add("done")

        })
    }
    function resetTodo() {
        ul.innerHTML = ""
    }
    add.addEventListener("click", todoAdd)
    reset.addEventListener("click", resetTodo)
}
)
