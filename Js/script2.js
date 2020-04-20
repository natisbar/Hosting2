// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn = document.getElementById("moodle");
var btn1 = document.getElementById("verifica");
var btn2 = document.getElementById("agenda");
var btn3 = document.getElementById("syllabus");
var btn4 = document.getElementById("recursos");
var btn5 = document.getElementById("restricciones");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];

// When the user clicks the button, open the modal 

btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
//   else if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
//   else if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
//   else if (event.target == modal3) {
//     modal3.style.display = "none";
//   }
//   else if (event.target == modal4) {
//     modal4.style.display = "none";
//   }
//   else if (event.target == modal5) {
//     modal5.style.display = "none";
//   }
// }