(function () {
	'use strict';
	
	var now = new Date();
	console.log(now);
	console.log(typeof Date());
	
	var partyTime = new Date(946684799000);
	console.log(partyTime);
	
	var dob = new Date('april 18 1973'); //defaults to midnight UTC if no time
	console.log(dob);
	
	var notADate = new Date('whoops');
	console.log(notADate);
	
	var specialDate = new Date(2009, 1,7);//month's are ZERO based!! crazy
	console.log(specialDate)
	
	//getters, setters and converters
	console.log(specialDate.getDate());
	console.log(specialDate.getUTCMonth()); //again, zero based
	console.log(specialDate.getUTCFullYear());
	
	console.log(specialDate.getDay());
	console.log(specialDate.getUTCDay());
	
	console.log(specialDate.toString());
	console.log(specialDate.toUTCString());
	console.log(specialDate.toDateString());
	console.log(specialDate.toTimeString());
	console.log(specialDate.toISOString());
	
	console.log(specialDate.toLocaleString());
	
}());