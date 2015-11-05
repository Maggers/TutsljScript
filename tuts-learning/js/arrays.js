(function () {
	 'use strict';
	 
	 var array = ['one', 'two', 'three'];
	 
	 console.log(array.length);
	 
	 array.push('four');
	 console.log(array);
	 
	 array.unshift('zero');
	 console.log(array);
	 
	 console.log(array.pop()); //last item is removed and returned as part of the function
	 console.log(array.shift()); //first item in array is removed and retured as part of the function
	 
	 array.splice(0,3,'a','b','c'); //first two items in the array are removed
	 console.log(array);
	 
	 console.log(array.reverse()); //these are mutator methods, they change the array permanently
	 
	 console.log(array.sort());
	 
	 console.log(['a','b','C'].sort()); //UNICODE upper case values are actually less than lower case 
	 console.log([3,20,10000].sort(function(a,b) {
		 if (a < b) {
			 return -1;
		 } else if (a===b) {
			 return 0;
		 } else {
			 return 1;
		 }
	 }));
	 
	 console.log(array.join('')); //concats all the characters into a string withh a comma seperator. Pass an empty string to avoid this
	 
	 console.log(array.indexOf('b'));
	 
	 console.log(array.slice(1));
	 console.log(array.slice(-2));
	 console.log(array.slice(0, -1));
	 
	 array.forEach(function (value, index) {
		 console.log('Item at index ' + index + ' has the value:' + value);
	 }); 
	 
	 console.log(array.every(function(value) {
		 return typeof value=== 'string';
	 }));
	 
	 console.log(['a', 1, 'b', 2, 'c', 3].filter(function (value) {
		 return typeof value !== 'number';
	 }));
	 //this method returns a new array, leaving the array unchanged
	 console.log(array.map(function (value) {
		 return value.toUpperCase();
	 }));
	 
	 console.log([1,2,3].reduce(function (total, value) {
		 return total += value;
	 },4));
}());