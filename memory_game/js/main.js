/*console.log("up and running!");

var cardFour = "queen";
console.log("User flipped " +  cardOne);
console.log("User flipped "  +  cardFour);
*/
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay =[];
var cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log("User flipped " + cardOne);

var cardTwo = cards[3];
cardsInPlay.push("cardTwo");
console.log("User flipped " + cardTwo);


if (cardsInPlay[0] === cardsInPlay[3]) {
  alert("You found a match!");
}
else {
  alert("Sorry, try again.");
}
