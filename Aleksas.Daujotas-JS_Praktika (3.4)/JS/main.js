var parser = new DOMParser();
let form = document.forms[0];
const listData = [];
form.addEventListener("submit", function(e) {
	e.preventDefault();
	let today = new Date();
	let inputField = document.querySelector("input");
	let inputValue = inputField.value;
	let list = document.querySelector("ul");
	let li = document.createElement("li")
	li.appendChild(document.createTextNode(inputValue));
	listData.push(li);
	list.appendChild(li);
	listData.push("[ '" + list.innerText + "' ] " + today);
	console.log(listData.toString());
});
