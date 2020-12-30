document.forms[0].addEventListener("submit", function (e) {
	e.preventDefault();
	let result = document.querySelector("p");
	result.innerText = 'Jūsų KMI yra: ';
	let height = e.target.elements.height.value;
	let weight = e.target.elements.weight.value;
	if (weight > 5 && height > 5) {
		let kmi = (weight) / (height / 100 * height / 100);
		result.append(kmi.toFixed(2));
	} else {
		result.innerText = "Neteisingi duomenys!";
	}
});