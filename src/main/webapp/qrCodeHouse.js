// index.js

var REST_DATA = 'api/todolist';
var REST_ENV = 'api/dbinfo';
var KEY_ENTER = 13;


function generateQR() {
	//	alert('generateQR() method');
	makeCode();
}

var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 100,
	height : 100
});

function makeCode () {
	//alert('makeCode() method');
	var elText = document.getElementById("input_string_id");
	
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}
	
	qrcode.makeCode(elText.value);
}

//makeCode();

