'use strict';

var nbClicks = 0;
var currentClass;
var virtualNames = [];

var session = new Session();

session.createTuiles();
session.printTuiles(6);


$('.tuile').click(function(event){	
	nbClicks++;
	$('.nbClicks').text(nbClicks);

	currentClass = $(event.target).data('name');
	$(this).toggleClass(currentClass);

	virtualNames.push(currentClass);

	if(nbClicks % 2 == 0) {
		console.log(virtualNames[0]);
		console.log(virtualNames[1]);
		session.matchTuile(virtualNames[0], virtualNames[1]);
		virtualNames = [];
	}
});
