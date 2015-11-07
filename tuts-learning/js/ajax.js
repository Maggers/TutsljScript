(function () {
	'use strict'
	//ajax limited to getting data from the same domain for security purposes
	
	var xhr = new XMLHttpRequest();
	xhr.onload = function () {
		console.log(JSON.parse(xhr.responseText));
	};
	console.log(xhr);
	
	xhr.open('GET', 'js/data.json');
	xhr.send();
	
}());