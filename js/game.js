

var score = 0;
var difficulty = 6;

var scoreMultiplier = difficulty;

var colors = generateRandomColors(difficulty);

var squares = document.querySelectorAll('.box');
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById('colorDisplay');

colorDisplay.textContent = pickedColor;

var resetButton = document.getElementById('reset');
resetButton.addEventListener("click", resetGame);

var easyButton = document.getElementById('easyBtn');
easyButton.addEventListener("click", easyButtonPress);

var hardButton = document.getElementById('hardBtn');
hardButton.addEventListener("click", hardButtonPress);

for(var i = 0; i < squares.length; i++){
	//adds the initial colors to the squares
	squares[i].style.background = colors[i];
	//adds clickListeners
	squares[i].addEventListener('click', function(){
		//checks to see if the computer picked color is the same as the one the player picked
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor){
			//if the color is guessed right the game adds to player score
			//added points are equal to the difficulty * 10
			console.log('yup');
			score += scoreMultiplier * 10;
			updateScore();
			makeSquaresReappear();
			newGame();
		} else {
			//if the color is guessed wrong the games removes from the multiplier bonus
			scoreMultiplier -= 2;
			updateScore();
			this.style.visibility = 'hidden'; 
		}
	});
}

function resetGame(e){
	score = 0;
	updateScore();
	//make all squares reappear
	makeSquaresReappear();
	//generate all new colors
	colors = generateRandomColors(difficulty);
	//pick a new random color from arr
	pickedColor = pickRandomColor();	
	//change colorDisplay to match new color
	colorDisplay.textContent = pickedColor;
	//change colors of squares on the page
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	scoreMultiplier = difficulty;
}

function newGame(e){
	//make all squares reappear
	makeSquaresReappear();
	//generate all new colors
	colors = generateRandomColors(difficulty);
	//pick a new random color from arr
	pickedColor = pickRandomColor();	
	//change colorDisplay to match new color
	colorDisplay.textContent = pickedColor;
	//change colors of squares on the page
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	scoreMultiplier = difficulty;
}

function makeSquaresReappear(){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.visibility = 'visible';
	}
}

function pickRandomColor(){
	//pick a random number
	var randomNum = Math.floor(Math.random() * colors.length);
	//use that number to access color in array
	return colors[randomNum];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//gets random color and pushes it into the array
		arr.push(createRandomColor());
	}
	return arr;
}

function randomNumber(min, max){
	//standard random number selector
	return Math.floor(Math.random() * (max - min)) + min; 
}

function createRandomColor(){
	//picks a random r, g, b value and returns a string with those numbers
	var rColor = randomNumber(0,256);
	var gColor = randomNumber(0,256);
	var bColor = randomNumber(0,256);
	return 'rgb'.concat('(',rColor,', ', gColor,', ', bColor,')');
}

function updateScore(){
	var displayedScore = document.getElementById('score');
	displayedScore.innerHTML = score;
}

function easyButtonPress(e){
	console.log('pressed');
	this.classList.add('selectedColor');
	hardButton.classList.remove('selectedColor');
	difficulty = 3;
	scoreMultiplier = difficulty;
	score = 0;
	updateScore();
	colors = generateRandomColors(difficulty);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(i < difficulty){
			squares[i].style.visibility = 'visible'; 
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = 'none'; 
		}
	}
}

function hardButtonPress(e){
	console.log('pressed');
	this.classList.add('selectedColor');
	easyButton.classList.remove('selectedColor');
	difficulty = 6;
	scoreMultiplier = difficulty;
	score = 0;
	updateScore();
	colors = generateRandomColors(difficulty);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.display = 'block';
		squares[i].style.visibility = 'visible'; 
		squares[i].style.background = colors[i];		
	}
}