console.log('Lodash is loaded:', typeof _ !== 'undefined');
var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var p1 = {
  name: 1,
  hand: []
};
var p2 = {
  name: 2,
  hand: []
};
var p3 = {
  name: 3,
  hand: []
};
var p4 = {
  name: 4,
  hand: []
};
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
p1.hand.push(deck[0], deck[1]);
p2.hand.push(deck[2], deck[3]);
p3.hand.push(deck[4], deck[5]);
p4.hand.push(deck[6], deck[7]);

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (array.length));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var p1Score = p1.hand[0].rank + p1.hand[1].rank;
var p2Score = p2.hand[0].rank + p2.hand[1].rank;
var p3Score = p3.hand[0].rank + p3.hand[1].rank;
var p4Score = p4.hand[0].rank + p4.hand[1].rank;

var scoreArray = [p1Score, p2Score, p3Score, p4Score];

console.log(scoreArray);

if (p1Score > p2Score && p1Score > p3Score && p1Score > p4Score) {
  console.log('Player 1 Wins!');
} else if (p2Score > p1Score && p2Score > p3Score && p2Score > p4Score) {
  console.log('Player 2 Wins!');
} else if (p3Score > p2Score && p3Score > p1Score && p3Score > p4Score) {
  console.log('Player 3 Wins!');
} else if (p4Score > p2Score && p4Score > p3Score && p4Score > p1Score) {
  console.log('Player 4 Wins!');
} else {
  console.log('Tie!');
}
