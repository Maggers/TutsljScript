(function () {
	'use strict';
	
	//selectors use CSS to select regions etc
	//when this wasn't in browser, jQuery was the main way to get it
	
	var mainHeading = document.querySelector('header :first-child');
	console.log(mainHeading);
	//returns null if nothing
	//get a node list by using All
	var headers = document.querySelectorAll('header');
	console.log(headers);
	
}());