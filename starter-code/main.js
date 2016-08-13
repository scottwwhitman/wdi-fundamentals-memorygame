var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* commenting this out for now:
if (cardTwo === cardFour) {
	alert("You found a match!");
} else if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
*/

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
	for (var i = 0; i < 4; i++) {
    	var cards = document.createElement('div');
		cards.innerHTML;
    	gameBoard.appendChild(cards);
    	cards.className = 'card';
	}
}

createBoard();
