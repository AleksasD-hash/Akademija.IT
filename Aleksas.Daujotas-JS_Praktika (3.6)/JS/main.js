document.body.style.backgroundImage = "url('IMG/Default.jpg')";
var select = document.querySelector("select");
select.addEventListener("change", function() {
	if (select.value == "Summer") {
		document.body.style.backgroundImage = "url('IMG/Summer.jpg')"; 
	}
	else if (select.value == "Autumn") {
		document.body.style.backgroundImage = "url('IMG/Autumn.jpg')"; 
	}
	else if (select.value == "Spring") {
		document.body.style.backgroundImage = "url('IMG/Spring.jpg')"; 
	} 
	else if (select.value == "Winter") {
		document.body.style.backgroundImage = "url('IMG/Winter.jpg')"; 
	} else {
		document.body.style.backgroundImage = "url('IMG/Default.jpg')"; 
	}
});