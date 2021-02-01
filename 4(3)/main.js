const form = document.forms[0];
const input = document.getElementById("input");
const inputArray = input.split();
const length = inputArray.map(inputArray => inputArray.length);
form.addEventListener("submit", console.log(length));

//friends.forEach(eachName => console.log(friends.indexOf(eachName) + 1 + "." + eachName));