( function () {
	'use strict';
	
	function Shape2d() {
		return {
			//type: this.constuctor.name,
			sides: []
		};
	}
	
	function Rectangle(width, height) {
		var shape = Shape2d.call(this);
		
		shape.sides.push(width, height, width, height);
		shape.getArea = function () {
			return shape.sides[0] * shape.sides[1];
		}
		return shape;
	}
	
	function Square(sidesLength) {
		return Rectangle.call(this, sidesLength, sidesLength);
	}
	
	var  myRect = Rectangle(5,4);
//	console.log(myRect.type);
	console.log(myRect.sides.length);
	console.log(myRect.getArea());
	
	var mySquare = Square(5);
	//console.log(mySquare.type);
	console.log(mySquare.sides.length);
	console.log(mySquare.getArea());
	
	console.log(mySquare.instanceof(Object));
}());