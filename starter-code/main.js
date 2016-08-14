/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/
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

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
    	var createCard = document.createElement('div');
		createCard.innerHTML;
    	gameBoard.appendChild(createCard);
    	createCard.className = 'card';
    	document.getElementsByClassName('card')[i].setAttribute('data-card', cards[i]);
    	document.getElementsByClassName('card')[i].addEventListener('click', isTwoCards);
	}
}

createBoard();

var isMatch = function() {
	return cardsInPlay[0] === cardsInPlay[1];
	gameBoard.removeData();
	createBoard();
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay['data-card'] = 'king') {
		cardElement.innerHTML = '<img src="king.png" alt="King of Spades" />';
	} else {
		cardElement.innerHTML = '<img src="queen.png" alt="Queen of Hearts" />';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}




