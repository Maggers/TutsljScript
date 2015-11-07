( function () {
	'use strict'
	function Order () {
		var total =0;
		
		return function addProduct(price) {
			var salesTax = price * 0.17,
			fee = price * 0.05;
			total += price + salesTax + fee;
			
			return total;
		};
	}
	
	var myOrder = new Order();
	
	console.log(myOrder(100));
	console.log(myOrder(150));//inner function when called again will remember all the variable values from the previous invocation
}());