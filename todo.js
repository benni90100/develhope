const add = document.querySelector("#add")
const input = document.querySelector("#input")
const ul = document.querySelector(".list")
const reset = document.querySelector("#svuota")

add.addEventListener("click", () => {
    const li = document.createElement("li")    
    if (input != "") {
        li.textContent = input.value
        ul.append(li)
        input.value = ""
    }
})
function resetPage() {
    ul.innerHTML=""
}
reset.addEventListener("click", resetPage)