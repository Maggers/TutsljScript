//Single line comment
/* open comment block
which can span
lines */

console.log('make a single line console message');

var theMeaningofLife=42, 
	foo = 'bar',
	baz, quux;
	
foo = baz;

var number = 1;
var string = 'hello';
var quotes = '"Hello", said the man';
var escaped = '"Oh no you didn\'t" she said';

var joined = 'wait, ' + 'a minute';
var array = [5,'something',true]; //array[0]

var object = {
	myNumber: 10,
	myString: 'woohoo'
};

object.myNumber;
object.myString;

var addition = 1+1; //addition = 2
var subtraction = 1-1;
var multiplication = 2*5;//10
var division = 5/2;
var remainder = 5 % 2; //remainder = 1

var postfix = 5;
var prefix = 5;

var additionAssignment =1;
additionAssignment+=1; //additionAssignment =2
var subtractionAssignment = 1;
subtractionAssignment-=1;

var multiplicationAssignment = 2;
var divisionAssignment = 5;
var modulusAssignment = 5;
multiplicationAssignment *=2; //multiplicationAssignment = 4;
divisionAssignment /=2.5; //value should be 2
modulusAssignment %=2; //value should be 

var precedence = 1+4*2; //will be 9 as * has higer precedence
var precedence2 = (1+4)*2; //will be 10 as () has highest precedence
var precedence3 = 2+10-2; //left to right as + - operators are equal

var object = {
	property1: true,
	property2: 'hello'
};
var string = 'hello';
var stringObject = new String('An object string');

function getThingByColor(color) {
	var things = {
		red: 'a red thing',
		green: 'a green thing',
		blue: 'a blue thing'
	};
	return things[color] || 'Sorry there isn\'t a thing by that name';
}

function myFunction(message) {
	console.log(message);
	return true;
}

var myOtherFunction = function myOtherFunction() {
	console.log('function expression');
}

console.log(hoistedVariable);
var hoistedVariable = 'test';

(function invokeImmediately () {
	console.log('invoked automatically');
}());

!function alsoInvokedAutomatically() {
	console.log('also invoked automatically');
}();

var global =1;
function aFunction() {
	var local =2;
	console.log(global);
	console.log(local);
}

(function () {
	'use strict';
	console.log(this);
	var object = {
		property: 'I belong to this',
		method: function () {
			return this.property;
		}
	}
	console.log(object.method());
	
	function Person(name) {
		this.name = name;
	}
	var bob = new Person('Bob');
	console.log(bob.name);
}());

var element = {
	'class': 'some-class'
};