const calculate = (event) => {
    event.preventDefault()

    let x = parseFloat(document.getElementById("x").value)
    let y = parseFloat(document.getElementById("y").value)
    let a = document.getElementById("answer")

    if (document.getElementById("addition").checked) {
        a.innerHTML = x + y
    }
    else if (document.getElementById("subtraction").checked) {
        a.innerHTML = x - y 
    }
    else if (document.getElementById("multiply").checked) {
        a.innerHTML = x * y 
    }
    else if (document.getElementById("division").checked) {
        a.innerHTML = x / y 
    }
}