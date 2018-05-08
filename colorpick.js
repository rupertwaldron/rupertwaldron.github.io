



var colors = randomRGB(6);
var pickedColor = random(colors);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColors = document.querySelector("#newColors");
var	modeButtons = document.querySelectorAll(".mode");
var squareNum = 6;


for (var i = modeButtons.length - 1; i >= 0; i--) {
	modeButtons[i].addEventListener("click", function() {
	for (var i = modeButtons.length - 1; i >= 0; i--) {
		modeButtons[i].classList.remove("selected");
	}
	this.classList.add("selected");
	this.textContent === "Easy" ? squareNum = 3: squareNum = 6;
	reset(squareNum);
	});
};



newColors.addEventListener("click", function() {
	reset(squareNum);
});

colorDisplay.textContent = pickedColor;
h1.style.backgroundColor = "steelblue";

for (var i = squares.length - 1; i >= 0; i--) {
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//Add event listeners to squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			newColors.textContent = "Play Again?";
			changeColors(pickedColor);
		} else {
			// this.style.backgroundColor = "#232323";
			this.classList.add("animate");
			messageDisplay.textContent = "Try Again";
		}
	});
};


function reset(sqnum) {
	colors = randomRGB(sqnum);
	pickedColor = random(colors);
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.display = "none";
		squares[i].classList.remove("animate");
	};
	for (var i = sqnum - 1; i >= 0; i--) {
	//Add initial colors to squares
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	};
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	newColors.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
};


function changeColors(color) {
	for (var i = squareNum - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
};

function random(array) {
	//Random numbers between 1 and length of array
	return array[Math.floor(Math.random() * array.length)];
};

function randomRGB(num) {
	var result = [];

	for (var i = num - 1; i >= 0; i--) {
		result[i] = generateRGB();
	}
	return result;
};

function generateRGB() {
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		return "rgb(" + red + ", " + green + ", " + blue + ")";
}
