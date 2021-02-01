function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + min)) + min;
}
let form = document.forms[0];
let timesGuessed = 0;
let guessDescription = document.getElementById('pguessDescription');
let randomNumber = getRandomInt(0, 10);
console.log(randomNumber);
form.addEventListener("submit", function(e) {
	e.preventDefault();
	timesGuessed++;
	let guessedNumber = +e.target.elements.guessedNumber.value;
	if (guessedNumber === randomNumber) {
		document.getElementById("pguessDescription").textContent = 'Atspėjote!';
		document.getElementById("submitButton").disabled = true;
	} else if (guessedNumber < randomNumber) {
		document.getElementById("pguessDescription").textContent = 'Skaičius yra didesnis';
	} else {
		document.getElementById("pguessDescription").textContent = 'Skaičius yra mažesnis';
	}
	document.getElementById("ptimesGuessed").textContent = timesGuessed + " times guessed. ";
});