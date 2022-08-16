
const container = document.querySelector(".container")
const btn = container.querySelector(".btn")

btn.onclick = function () {
    this.classList.toggle("active")
    container.classList.toggle("active")
}