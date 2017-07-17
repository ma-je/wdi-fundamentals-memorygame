/*console.log("up and running!");

var cardFour = "queen";
console.log("User flipped " +  cardOne);
console.log("User flipped "  +  cardFour);
*/
var cards = [
{
  rank: 'queen',
  suit: 'hearts',
  cardImage: 'images/queen-of-hearts.png',
},
{
  rank: 'queen',
  suit: 'diamonds',
  cardImage: 'images/queen-of-diamonds.png',
},
{
  rank: 'king',
  suit: 'hearts',
  cardImage: 'images/king-of-hearts.png',
},
{
  rank: 'king',
  suit: 'diamonds',
  cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay =[];
//cardsInPlay.push(cards[cardId]);

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  console.log(cardId);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length===2) {
    checkForMatch();
  }

};

var gameBoard = document.getElementById('game-board');

  var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var newCard = document.createElement('img');
    newCard.setAttribute('src', "images/back.png");
    newCard.setAttribute('data-id', i);
    newCard.addEventListener('click', flipCard);
    gameBoard.appendChild(newCard);
  }
};
createBoard();

  /*if (cardsInPlay[0] === cardsInPlay[3]) {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again.");
  }

  where is this supposed to go Next update the cards[cardId] portion of cardsInPlay.push(cards[cardId]);. You'll want to push the name of the card ("queen" or "king") to the cardsInPlay array.
*/
