let ul = document.getElementById("ul");
let change = document.getElementById("change")
let change1 = document.getElementById("change1")

function menue() {
    ul.style.height = "100vh"
    ul.style.opacity = "1"
    ul.style.width = "100%"
    change.style.opacity = "1"
    change1.style.fontSize = "20px"

}

function back() {
    ul.style.height = "0%"
    ul.style.opacity = "0"
    ul.style.width = "0"
    change.style.opacity = "0.1"
    change1.style.fontSize = "5px"


}