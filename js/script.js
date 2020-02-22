// document.getElementById("");
// document.getElementsByClassName("");
// document.getElementsByTagName("");
// document.querySelector("");
// document.querySelectorAll(".classAll");

document.getElementById("burger").onclick = function(){
    addMenu();
}

function addMenu(){
    document.getElementById("top_header").classList.toggle("show");    
}