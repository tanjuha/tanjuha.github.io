function funFilter() {
	var input, filter, ul, li, a;
	input = document.getElementById('inputFilter');
	filter = input.value.toUpperCase();
	ul = document.getElementById("ulFilter");
	li = ul.getElementsByTagName('li');

	for(var i=0; i<li.length; i++){
		a=li[i].getElementsByTagName("a")[0];
		if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
			li[i].style.display = "block";
		}else{
			li[i].style.display = "none";
		}
	}
}
