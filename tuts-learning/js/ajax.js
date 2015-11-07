(function () {
	'use strict'
	//ajax limited to getting data from the same domain for security purposes
	
	var xhr = new XMLHttpRequest();
	xhr.onload = function () {
		console.log(JSON.parse(xhr.responseText));
	};
	xhr.withCredentials = true;
	console.log(xhr);
	//cookies can also be sent withCredentials
	xhr.open('GET', 'js/data.json');
	xhr.send();
	
}());