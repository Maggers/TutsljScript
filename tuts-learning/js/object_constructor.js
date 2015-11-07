(function () {
	'use strict';
	var newObject = {};
	Object.prototype.mySpecialProperty = 'special';
	console.log(newObject.mySpecialProperty);
	//object literal will inherit the special property dynamically
	
	var newArray = [1, 2, 3];
	if (!Array.prototype.first) { //best practice to check and make sure the browser doesn't alrady support this
		Array.prototype.first = function (){return this[0]};
	}
	console.log(newArray.first());
	
	newObject.prop1 = 'prop1';
	Object.keys(newObject).forEach(function (item) {
		console.log(newObject[item]);
	});	
	
	Object.freeze(newObject); //freezes this object so you can't change a property
	
	if (!Object.isFrozen(newObject)) {
		newObject.prop1 = 'updated prop!'; //if we think a prop may be frozen, we can check 
	}
	//impossible to unfreeze though you could step through and copy to a new object
	
	var unFrozenObj = {};
	Object.keys(newObject).forEach( function (item) {
		unFrozenObj[item] = newObject[item];
	});
	
	Object.seal(unFrozenObj);
	unFrozenObj.prop1 = 'woohoo!';
	console.log(unFrozenObj.prop1);
	
	if (!Object.isSealed(unFrozenObj)) {
		delete unFrozenObj.prop1;
	}
	
	var extensible = {};
	console.log(Object.isExtensible(extensible));
	
	Object.preventExtensions(extensible);
	
	if (Object.isExtensible(extensible)) {
		extensible.newProperty ='new';
	}
	console.log(extensible);
	
	var Person = function (name) {
		this.name = name;
	}
	
	Person.prototype = {
		greet: function () {
			return this.name;
		}
	}
	//this is a basic way of creating objects that behave a little like classes
	var fred = new Person('Fred');
	console.log(fred.greet());
	console.log(fred);
	
	var bob = Object.create(Person.prototype, {
		name: {writable: true, value: 'Bob'}
	});
	
	Object.defineProperty(bob, 'job', {
		value: 'Developer',
		writable: true,
		configurable: true,
		enumerable: true
	});
	Object.defineProperties(bob, {
		heightInCm: {
			value: 183,
		},
		weightInKg: {
			value: 75
		}
	});
	console.log(bob.greet());
	console.log(bob.job);
	console.log(bob);
}());