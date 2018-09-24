const calculate = (event) => {
    event.preventDefault()

    let x = parseFloat(document.getElementById("input1").value)
    let y = parseFloat(document.getElementById("input2").value)
    let a = document.getElementById("answer")

    if (document.getElementById("add").checked) {
        a.innerHTML = x + y
    }
    else if (document.getElementById("sub").checked) {
        a.innerHTML = x - y 
    }
    else if (document.getElementById("mul").checked) {
        a.innerHTML = x * y 
    }
    else if (document.getElementById("div").checked) {
        a.innerHTML = x / y 
    }
}