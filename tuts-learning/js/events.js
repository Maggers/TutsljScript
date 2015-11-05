(function () {
	'use strict';
	
	var subHeading = document.getElementsByTagName('h2')[0];
	var header = document.getElementsByTagName('header')[0];
	
/*	subHeading.addEventListener('click', function () {
		console.log('The h2 was clicked!'); //could pass a function handler rather than a function literal
	});*/
	
	//events bubble up through their parents
	
	header.addEventListener('click', function (e){
		console.log('The ' + e.target.nodeName + ' was clicked');
		e.stopPropagation(); //stops propogating events up
	});
	
	document.addEventListener('click', function () {
		console.log('Something was clicked');
	});
	
	var anchor= document.createElement('a');
	anchor.textContent = 'microsoft';
	anchor.setAttribute('href', 'http://microsoft.com');
	document.body.appendChild(anchor);
	
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		console.log('navigation prevented');
	});
	
	function mouseenterHandler() {
		console.log('The mouse is in the header');
	}
	header.addEventListener('mouseenter', mouseenterHandler);
	header.removeEventListener('mouseenter', mouseenterHandler);
	
}());