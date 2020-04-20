function refresh() {
    location.reload(true);
}

document.getElementById("closeModal_gestor").addEventListener("click", refresh);
document.getElementById("closeModal_1").addEventListener("click", refresh);
document.getElementById("closeModal_2").addEventListener("click", refresh);
document.getElementById("closeModal_3").addEventListener("click", refresh);

document.getElementById("closeModal_4").addEventListener("click", refresh);
document.getElementById("closeModal_5").addEventListener("click", refresh);
document.getElementById("closeModal_6").addEventListener("click", refresh);




function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}