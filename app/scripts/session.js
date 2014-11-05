'use strict';

function Session(){};

Session.prototype.createTuiles = function (){
	session.tuiles = [];

	for(var i = 0; i < tuilesList.length; i++){
		session.tuiles.push(tuilesList[i]);
		session.tuiles.push(tuilesList[i]);
	}

	session.tuiles = _.shuffle(session.tuiles);
};

Session.prototype.printTuiles = function (number) {
	for(var i = 0; i < number; i++){
		$('.tuiles-container').append('<div class=\'col-md-2 tuile\' data-name=' + session.tuiles[i].name + '></div>');
	}
};

Session.prototype.matchTuile = function(name_1, name_2){
	if(name_1 == name_2) {
		console.log("c'est la meme");
	}
	else {
		console.log("c'est aps pareil");
	}
};
