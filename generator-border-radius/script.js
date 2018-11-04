function fun(){
	// 
var ranTL = document.getElementById("top-l");
var ranTR = document.getElementById("top-r");
var ranBL = document.getElementById("bot-l");
var ranBR = document.getElementById("bot-r");
	//
var inpTL =document.getElementById("val-t-l");
inpTL.value = ranTL.value;
var inpTR =document.getElementById("val-t-r");
inpTR.value = ranTR.value;
var inpBL =document.getElementById("val-b-l");
inpBL.value = ranBL.value;
var inpBR =document.getElementById("val-b-r");
inpBR.value = ranBR.value;
	//
var div= document.getElementById("div");
div.style.borderRadius = inpTL.value + "px "+ inpTR.value + "px "+ inpBL.value + "px "+ inpBR.value + "px";

}