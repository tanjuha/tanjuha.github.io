var slideIndex = 1;
showCarousel(slideIndex);
function funCarousel(n){
	showCarousel(slideIndex += n);
}

function showCarousel(n){
	var slide = document.getElementsByClassName("slide");

	if(n>slide.length){
		slideIndex = 1;
	}
	if(n<1){
		slideIndex = slide.length;
	}
	for(var i=0; i<slide.length; i++){
		slide[i].style.display = "none";
	}
	slide[slideIndex-1].style.display = "block";
}
