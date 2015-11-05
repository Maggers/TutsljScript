(function () {
	'use strict';
	
	console.log(document.getElementById('mainHeading'));
	console.log(document.getElementsByClassName('heading'));
	console.log(document.getElementsByTagName('header'));
	
	var mainHeading = document.getElementById('mainHeading');
	var subHeading = document.getElementsByClassName('heading')[1];
	
	console.log(mainHeading.id);
	console.log(subHeading.id);	//no id so returns an empty string
	
	mainHeading.id = 'firstHeading';
	console.log(mainHeading.id);
	console.log(document.getElementById('firstHeading'));
	
	console.log(subHeading.className); 
	subHeading.classList.add('special');
	subHeading.classList.remove('special');
	console.log(subHeading.classList.contains('special'));
	
	console.log(mainHeading.tagName);
	console.log(mainHeading.nodeType); //should be 1 for proper element nodes
	
	console.log(mainHeading.childNodes[0].nodeType); //3 for text 
	mainHeading.innerHTML='<span>' + mainHeading.innerHTML + '</span>';
//innerHTML gives the contents of the elemtent
//outerHTML gives that Plus the rest of the element. This example replaces the H1 with a p
	mainHeading.outerHTML = '<p>' + mainHeading.innerHTML + '</p>';
	
	subHeading.textContent = 'I love Envato!';
	//setAttribute takes two args, first is thing to be edited, second is the value
	subHeading.setAttribute('contenteditable', true);
	subHeading.removeAttribute('contenteditable');
	
	console.log(subHeading.hasAttribute('contenteditable'));
	
	var heading = document.getElementsByTagName('header')[0];
	console.log(heading.childNodes.length);
	
	var x, length;
	for (x=0, length = heading.childNodes.length; x < length; x+= 1){
		if (heading.childNodes[x].nodeType === 1) {
			console.log('I am a ' + heading.childNodes[x].tagName);
		}
	}
	
	console.log(heading.children.length);
	
	console.log(heading.childNodes[0].nodeName);
	console.log(heading.children[0].nodeName);
	console.log(heading.firstChild.nodeName);
	//parentNode will be null if there are no more parents
	console.log(subHeading.parentNode.nodeName);
	console.log(heading.firstChild.nextSibling.nodeName);
	console.log(heading.lastChild.previousSibling.nodeName);
	//this will add the H2 heading element to the end of the body element
	document.body.appendChild(subHeading);
	//this puts it back up the top
	document.body.insertBefore(subHeading, heading);
	document.body.removeChild(heading);
	if (document.body.contains(heading)) {
		document.body.removeChild(heading);
	}
	//createElement will add the <> around the beginning and end of the element automatically
	var substitute = document.createElement('i');
	substitute.textContent = 'I have been swapped in';
	document.body.replaceChild(substitute,subHeading);
}());
