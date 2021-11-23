console.log('Lodash is loaded:', typeof _ !== 'undefined');
var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var players = [{ name: 1, hand: [] }, { name: 2, hand: [] }, { name: 3, hand: [] }, { name: 4, hand: [] }];
var deck = [];

for (var i = 0; i < cards.length; i++) {
  var diamond = {
    rank: cards[i],
    suit: 'diamond'
  };
  var club = {
    rank: cards[i],
    suit: 'club'
  };
  var heart = {
    rank: cards[i],
    suit: 'heart'
  };
  var spade = {
    rank: cards[i],
    suit: 'spade'
  };
  deck.push(diamond, club, heart, spade);
}
shuffleArray(deck);

for (var j = 0; j < players.length; j++) {
  players[j].hand.push(deck[0]);
  deck.shift();
  players[j].hand.push(deck[0]);
  deck.shift();
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (array.length));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var scoreArray = [
  players[0].hand[0].rank + players[0].hand[1].rank,
  players[1].hand[0].rank + players[1].hand[1].rank,
  players[2].hand[0].rank + players[2].hand[1].rank,
  players[3].hand[0].rank + players[3].hand[1].rank
];

console.log(scoreArray);

for (var k = 0; k < scoreArray.length; k++) {
  if (scoreArray[k] === Math.max(...scoreArray)) {
    console.log('Player ' + (k + 1) + ' wins with a score of : ' + scoreArray[k]);
  }
}
