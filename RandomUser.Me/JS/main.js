$(document).ready(function () {
	var url = 'https://randomuser.me/api/?results=1'
	fetchInformation(url);

	let nameObject = document.querySelector('h4');

	function fetchInformation(url) {
		fetch(url)
			.then((response) => (response.json()))
			.then(function (data) {
				nameObject = data.results[0].name;
				pictureObject = data.results[0].picture.thumbnail;
				locationObject = data.results[0].location;
				document.querySelector('img').src = pictureObject;
				document.querySelector('h4').innerHTML = nameObject.title + ' ' + nameObject.first + ' ' + nameObject.last;
				document.getElementById('pLocation').innerHTML = ' ' + locationObject.country;
				document.getElementById('pAge').innerHTML = ' ' + data.results[0].dob.age;
				document.getElementById('pEmail').innerHTML = ' ' + data.results[0].email;
				document.getElementById('pPhone-Number').innerHTML = ' ' + data.results[0].phone;
				console.log(data);
				console.log(nameObject);
			});
	}
});