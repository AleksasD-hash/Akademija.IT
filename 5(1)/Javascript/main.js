const form = document.forms[0];
const masyvas = [];

form.addEventListener("submit", function(e) {
	e.preventDefault();
	console.log(e.target.elements[0].value);
	masyvas.push(e.target.elements[0].value);
	localStorage.setItem('item', JSON.stringify(masyvas));
	let item = localStorage.getItem('item');
});