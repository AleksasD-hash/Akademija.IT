let restoranas = {
	Pavadinimas: "Gervalgis",
	vietos: 34,
	rezervuota: 0,
	rezervuoti: function () {
		this.vietos--;
		this.rezervuota++;
	},
	atsauktiRezervacija: function() {
		this.rezervuota--;
		this.vietos++;
	},
	vietuAtaskaita: function () {
		console.log("Šiuo metu restorane yra " + this.vietos + " laisvos vietos ir " +
			this.rezervuota + " rezervuotos vietos");
	}
};

restoranas.rezervuoti();
restoranas.vietuAtaskaita();
restoranas.atsauktiRezervacija();
restoranas.vietuAtaskaita();