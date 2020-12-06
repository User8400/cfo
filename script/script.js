
var elCard = document.querySelectorAll('.card');

[].forEach.call (elCard, function(elementCard) {
	console.log(elementCard.id);

	elementCard.onclick = function(e) {
		console.log(this);
	}
});