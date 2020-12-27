
var elCard = document.querySelectorAll('.card');

[].forEach.call (elCard, function(elementCard) {
	console.log(elementCard.id);

	elementCard.onclick = function(e) {
		//console.log(this);
		//console.log(this.data_doc_id);
		//alert(this.id)
		elem = document.getElementById(this.id);
		//console.log(elem)
		data_doc_id = elem.getAttribute("data_doc_id");

		console.log(elem.getAttribute("data_doc_id"));
		console.log(elem.getAttribute("data_doc_key"));
		//console.log(elem.data_doc_id)
	}
});

window.onload = init;

function init(){
    var button = document.getElementById("lightTButton")
    button.onclick = handleButtonLightstyle;
    /*var button = document.getElementById("ColTButton")
    button.onclick = handleButtonColorStyle;
    */
    var button = document.getElementById("darkTButton")
    button.onclick = handleButtondarkstyle;
}

function handleButtonColorStyle() {
    alert("Цветной стиль");
    /*
    var elements = document.getElementsByClassName("bg-card-color"),i,len;
    for (i = 0, len = elements.length; i < len; i += 1) {
       console.log(elements[i]);
       if (typeof elements[i] == "undefined") {}
       else {
       		elements[i].className = "card bg-card-light";
       }
    }
	var elements = document.getElementsByClassName("bg-color"),i,len;
    for (i = 0, len = elements.length; i < len; i += 1) {
       console.log(elements[i]);
       if (typeof elements[i] == "undefined") {}
       else {
       		elements[i].className = "header bg-light";
       }
    }
	var elements = document.getElementsByClassName("bg-footer-color"),i,len;
    for (i = 0, len = elements.length; i < len; i += 1) {
       console.log(elements[i]);
       if (typeof elements[i] == "undefined") {}
       else {
       		elements[i].className = "footer bg-footer-light";
       }
    }*/
}
function handleButtonLightstyle() {

	document.querySelectorAll('.bg-card-light').forEach((elem) => {		
		elem.classList.add("bg-card-dark");
		elem.classList.remove("bg-card-light");
 	});
}
function handleButtondarkstyle() {
	document.querySelectorAll('.bg-card-dark').forEach((elem) => {		
		elem.classList.add("bg-card-light");
		elem.classList.remove("bg-card-dark");
 	});
}

