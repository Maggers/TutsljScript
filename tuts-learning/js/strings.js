(function () {
	'use strict';
	
	var testString = 'test string';
	
	console.log(testString.length);
	
	console.log(testString.split(' '));
	console.log(testString.indexOf('t',1));
	console.log(testString.lastIndexOf('t')); //still starts from 0m, even though working from back
	
	console.log(testString.toUpperCase()); //doens't modify the string contents, just returns the upper case
	
	console.log(testString.substring(5)); //everything until 5th index is included, rest truncated
	console.log(testString.substring(0,4)); //	everything from 0 to 4th ignored, remainder returned
	
	console.log(testString.slice(5));
	console.log(testString.slice(0,4));
	console.log(testString.slice(-6));
	console.log(testString.slice(2, -2)); //from index 2 through to length - 2
	
	console.log('     test     '.trim());
}());
