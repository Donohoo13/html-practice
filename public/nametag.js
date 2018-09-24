const changeName = (event) => {
    event.preventDefault();
    
    document.getElementById("nameChanger").innerHTML = document.getElementById("nameBar").value;
}