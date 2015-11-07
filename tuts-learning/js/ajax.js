(function () {
	'use strict'
	//ajax limited to getting data from the same domain for security purposes
	
	var xhr = new XMLHttpRequest();
	console.log(xhr);
	
	xhr.open('GET', 'js/data.json');
	xhr.send();
	
}());