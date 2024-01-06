// Your code goes here
document.addEventListener("DOMContentLoaded", function (){
    let p = document.getElementById("text")
    p.remove()
    let body = document.querySelector("body")
    body.innerHTML = '<p id="text">This is really cool!</p>'

})