/* global document */
var body = document.getElementsByTagName("BODY")[0];
body.style.backgroundImage = "url('IMG/Default.jpg')";
let form = document.querySelector("form");
let option = document.getElementsByClassName("select");
let selectOption = option.value;

form.addEventListener("submit", function(e) {
	e.preventDefault;
	document.querySelector = "url(\"IMG/" + `${selectOption}.jpg` + ")";
});