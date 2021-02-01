let form = document.forms[0];
let button = document.querySelector("button");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let progressBar = document.getElementsByClassName("progress-bar")[0];
	let inputValue = +e.target.elements.input.value;
	if (inputValue <= 39 && inputValue > 0) {
		progressBar.setAttribute("style", "width:39%");
		progressBar.className = "progress-bar bg-warning";
		inputValue == null;
	} else if (inputValue >= 40 && inputValue <= 70) {
		progressBar.setAttribute("style", "width:70%");
		progressBar.className = "progress-bar bg-info";
		inputValue == null;
	} else if (inputValue > 70 && inputValue <= 100) {
		progressBar.setAttribute("style", "width:100%");
		progressBar.className = "progress-bar bg-success";
		inputValue == null;
	} else if (inputValue <= 0) {
		progressBar.className = "progress-bar empty";
		progressBar.setAttribute("style", "width:0%");
	}
});