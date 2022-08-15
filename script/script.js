
const container = document.querySelector(".container")
const btn = document.querySelector(".btn")

btn.onclick = function () {
    this.classList.toggle("active")
    container.classList.toggle("active")
}