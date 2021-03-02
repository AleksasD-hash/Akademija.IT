let knyga = {
	autorius: "",
	pavadinimas: "",
	metai: 0,
	psl: 0,
	kaina: 0

};

let knygynas = {
	knygos:[],
	nuolaida: function() {
	this.knygos.forEach(knyga => knyga.kaina = knyga.kaina * 9 / 10);
}
};

knygynas.knygos.push({
	autorius: "Jordan Peterson",
	pavadinimas: "12 gyvenimo taisyklių: chaoso priešnuodis",
	metai: "2018",
	psl: "454",
	kaina: 14.99
});
knygynas.knygos.push({
	autorius: "Fyodor Dostojevsky",
	pavadinimas: "Nusikaltimas ir bausmė",
	metai: 2008,
	psl: 576,
	kaina: 10.44
});
console.log(knygynas.knygos[0]);
console.log(knygynas.knygos[1]);
knygynas.nuolaida();
console.log(knygynas.knygos[0]);
console.log(knygynas.knygos[1]);