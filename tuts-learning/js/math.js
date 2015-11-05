(function () {
	'use strict';
	
	//no contructor. Exists as a static and is available everywhere
	console.log(Math.PI);
	console.log(Math.E);
	
	console.log(Math.ceil(1.3));
	console.log(Math.floor(1.9));
	console.log(Math.round(4.4));
	
	console.log(Math.max(1,2,3,4,5)); //will retuen naN if passed a non number
	console.log(Math.min(1,2,3,4,5));
	console.log(Math.abs(-7));
	console.log(Math.sqrt(64));
	console.log(Math.random());
	console.log(Math.floor(Math.random() * 10));
}());
