let btn = document.querySelector(".btn")
let txt = document.querySelector("h3")

btn.addEventListener("click",()=> {
    let num1 = parseInt(document.getElementById('n1').value);
    let num2 = parseInt(document.getElementById('n2').value);
    let randnum = Math.floor(Math.random() * (num2 - num1 + 1) + num1)
    let ran = Math.random()*10
    txt.innerHTML = `Your random no. is ${randnum}`
})