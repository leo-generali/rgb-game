var randomNumber = function(min, max){
	//standard random number selector
	return Math.floor(Math.random() * (max - min)) + min; 
};

var generateRandomColor = function(){
	//picks a random r, g, b value and returns a string with those three numbers selected
	var rColor = randomNumber(0,256);
	var gColor = randomNumber(0,256);
	var bColor = randomNumber(0,256);
	return 'rgb'.concat('(',rColor,', ', gColor,', ', bColor,')');
};

var updateScore = function(){
	//updates the score board
	var displayedScore = document.getElementById('score');
	displayedScore.innerHTML = score;
};
