(function () {
	'use strict'
	
	var testFunction = function testFunction(arg1, arg2) {
		return arg1 + arg2;
	}
	
	console.log(testFunction.length);
	
	var person = {
		name: 'Dan',
		job: 'Developer'
	}
	
	function introduce(inductee) {
		console.log('Hey '+inductee+ '! my name is ' + this.name + ', and I\'m a ' + this.job);
	}
	
	introduce.call(person,'Bob');
	
	function chat(respondent, subject) {
		console.log('So ' + respondent + ', what about the '+ subject + ' huh? Pretty good for a '+this.job + ' like me right?');		
	}
	
	function engage(mode, object, args){
		mode.apply(object, args);
	}
	
	engage(introduce, person, ['Fred']);
	engage(chat, person, ['A1', 'new IDE'])
	
	function addToCart(fee, price) {
		if (!this.total) {
			this.total = 0;
		}
		console.log(fee);
		this.total += price += fee || 0;
		return this.name + '\'s cart total is $' + this.total;
	}
	
	var dansCart = addToCart.bind(person, 1);
	console.log(dansCart(50));
	console.log(dansCart(50));
	
	var bob = {
		name: 'Bob'
	};
	
	var bobsCart = addToCart.bind(bob, 5);
	console.log(bobsCart(50));
	console.log(bobsCart(50));
	
}());