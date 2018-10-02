function funToggleDescription(){
 var detail = document.getElementById("blocDescription");
 detail.classList.toggle("toggleDescription");
 var pencil = document.getElementById("pencil");
 pencil.classList.toggle("pencil");
 var textarea = document.getElementById("detailsBox");
 textarea.classList.toggle("detailsEmptyArea");
}