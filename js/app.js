//Rewrite of RGB Color Guesser
//Started on January 2, 2017

var model = {
	//Default settings to use for the game
	settings: {
		score: 0,
		difficulty: 6,
		clicks: 0,
		scoreToReach: 300,
		scoreMultiplier: 6,
		squareColors: []
	}
};

var controller = {
	init: function(){
		this.replaceModelRGB();
	},

	//Generates a random number
	randomNum: function(min, max){
		return Math.floor(Math.random() * (max - min)) + min;
	},

	//generate random RBG string value
	randomRGB: function(){
		var rColor = this.randomNum(0,256);
		var gColor = this.randomNum(0,256);
		var bColor = this.randomNum(0,256);
		return 'rgb'.concat('(',rColor,', ', gColor,', ', bColor,')');
	},

	//based on difficulty of game, fill in array with 'x' amount of randomly generated RGB strings
	createNewRGBs: function(){
		this.tempArr = [];
		for(var i = 0; i < model.settings.difficulty; i++){
			var tempRGB = this.randomRGB();
			this.tempArr.push(tempRGB);
		}
		return this.tempArr;
	},

	//replaces default square array with generated square array
	replaceModelRGB: function(){
		model.settings.squareColors = this.createNewRGBs();
	},

	//returns the RGB in the model
	returnModelRGB: function(){
		return model.settings.squareColors;
	},

	//returns the players current settings
	returnSettings: function(){
		return model.settings;
	},

	//returns a random string from the square colors array
	selectRGBValue: function(){
		this.randomNum = Math.floor(Math.random() * model.settings.squareColors.length);
		console.log(this.randomNum);
		return model.settings.squareColors[this.randomNum];
	}
};

var view = {
	init: function(){
		this.playerSettings = controller.returnSettings();
		this.playerColors = controller.returnModelRGB();
	},

	refreshPlayerColors: function(){
		this.playerColors = controller.returnModelRGB();
	},

	//Selects an RGB value from the squareColors array to display for the player

};

//Starts the application
//controller.init();