// Get the modal
var modalgestor = document.getElementById("mygestor");

// Get the button that opens the modal
var btngestor = document.getElementById("gestor");

// Get the <span> element that closes the modal
var spangestor = document.getElementsByClassName("close")[9];

// When the user clicks the button, open the modal 
btngestor.onclick = function() {
    modalgestor.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spangestor.onclick = function() {
    modalgestor.style.display = "none";
}