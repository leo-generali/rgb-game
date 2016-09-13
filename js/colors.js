var randomNumber = function(min, max){
	//standard random number selector
	return Math.floor(Math.random() * (max - min)) + min; 
};

var generateRandomColors = function(num){
	//picks a random r, g, b value and returns a string with those three numbers selected
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
};

var updateScore = function(){
	//updates the score board
	var displayedScore = document.getElementById('score');
	displayedScore.innerHTML = score;
};

var setSquareColors = function(num){

};

var returnColorOnClick = function(e){
	console.log(this.style.background);
	return this.style.background;
};

var randomColor = function(){
	var rColor = randomNumber(0,256);
	var gColor = randomNumber(0,256);
	var bColor = randomNumber(0,256);
	return 'rgb'.concat('(',rColor,', ', gColor,', ', bColor,')');
};

var pickRandomColor = function(arr, num){
	return arr[randomNumber(0, num)];
};