let paragraph = document.getElementsByClassName("par");
let buttonYellow = document.getElementById("btn-yellow");
let buttonGreen = document.getElementById("btn-green");
let buttonRed = document.getElementById("btn-red");

buttonYellow.addEventListener("click", function () {
	paragraph[0].style.color = "yellow";
});
buttonGreen.addEventListener("click", function () {
	paragraph[0].style.color = "green";
});
buttonRed.addEventListener("click", function () {
	paragraph[0].style.color = "red";
});

let resizeContainer = document.getElementById("resizeContainer");
let btnGrow = document.getElementById("padidinti");
let btnShrink = document.getElementById("sumazinti");
let imageHTML = document.getElementById("firstLogo")

btnGrow.addEventListener("click", function () {
	imageHTML.style.width = '300px';
	imageHTML.style.height = '300px';
});

btnShrink.addEventListener("click", function () {
	imageHTML.style.width = '200px';
	imageHTML.style.height = '200px';
});

let imageHTML1 = document.getElementById("secondLogo");
let btnColor = document.getElementById("spalvotas");
let btnBlack = document.getElementById("nespalvotas");
btnBlack.addEventListener("click", function () {
	imageHTML1.setAttribute("src", "IMG/HTML5-black.png")
	imageHTML1.setAttribute("width", '450px');
	imageHTML1.setAttribute("height", '250px');
})
btnColor.addEventListener("click", function () {
	imageHTML1.setAttribute("src", "IMG/HTML5-original.png")
})


let heading = document.getElementById("heading");
let buttonHeading = document.getElementById("btn-heading");
buttonHeading.addEventListener("click", function () {
	heading.style.display = 'inherit';
});
buttonHeading.addEventListener("mouseover", function () {
	heading.style.display = 'none';
});

let commentButton = document.getElementById("commentButton");
let textArea = document.getElementById("textArea");
let nameField = document.getElementById("nameField");

commentButton.addEventListener("click", function() {
	nameField.value = "";
	textArea.value = "";
	alert("Dėkojame už jūsų nuomonę! :)");
});
