let form = document.forms[0];

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let pSum = document.querySelector("p");
	pSum.innerHTML = "Sum is: ";
	let number1 = e.target.elements.number1.value;
	let number2 = e.target.elements.number2.value;
	let result = parseInt(number1) + parseInt(number2);
	pSum.append(result);
});