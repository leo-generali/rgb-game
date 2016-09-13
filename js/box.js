

var difficulty = 6;
var scoreMultiplier = difficulty;
var score = 0;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.box');

// var randomColorToGuess = randomNumber(0, difficulty);



// for(var i = 0; i < squares.length; i++){
// 	squares[i].style.background = generateRandomColor();
// 	colors.push(squares[i].style.background);
// 	console.log(selectedColor);
// 	squares[i].addEventListener('click', function(){
// 		var clickedColor = this.style.background;
// 		if( clickedColor === selectedColor){
// 			console.log(scoreMultiplier);
// 			console.log(score);
// 			score += scoreMultiplier * 10;
// 			updateScore();
// 			for(var i = 0; i < squares.length; i++){
// 				squares[i].style.background = 'visible';
// 			};
// 		}else{
// 			this.style.visibility = 'hidden'; 
// 			console.log(scoreMultiplier);
// 			scoreMultiplier -= 2;
// 		}
// 	});
// }	

var selectedColor = pickRandomColor(colors, difficulty);
var displayColor = document.getElementById('colorDisplay');
displayColor.innerHTML = selectedColor;

console.log(selectedColor);

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener('click', returnColorOnClick);
};

if(returnColorOnClick() === selectedColor){
	console.log('yay');
};
