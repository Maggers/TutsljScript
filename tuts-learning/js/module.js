( function () {
	'use strict';
	//revealing module pattern. Code is encapsulated, shielded from other code
	var utils = (function utils() {
		function trimExtension(filename) {
			return filename.toLowerCase().replace(/\.{1}[a-z]+/,'');
		}
		
		function trimExtensions(filenames) {
			var trimmed = [];
			filenames.forEach(function (item) {
				trimmed.push(trimExtension(item));
			});
			return trimmed;
		}
		
		function trimFileExtension() {
			return (typeof arguments[0] === 'string' ?
			trimExtension(arguments[0]) :
			trimExtensions(arguments[0]));
		}
		
		return {
			trimFileExtension: trimFileExtension
		}
	}());
	
	var aFilename = 'something.js';
	console.log(utils.trimFileExtension(aFilename));
	console.log(utils.trimFileExtension(['somefile.css', 'anotherfile.html']));
	
	
}());