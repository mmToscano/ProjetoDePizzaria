// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.querySelector(".botoesDasPizzas");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function abrirModal(){
    modal.style.display = "block";
    mostrarValorDaPizza();
}

span.onclick = function() {
    modal.style.display = "none";
}

function mostrarValorDaPizza(){
    document.getElementById("valorDaPizza").innerHTML;
}