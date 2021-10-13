var num1 = 1;
var num2 = 2;
var num3 = 3;
var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

var heroes = ['iron man', 'thor', 'doctor strange', 'captain america'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  { title: 'book1', author: 'person1' },
  { title: 'book2', author: 'person2' },
  { title: 'book3', author: 'person3' }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var js = { title: 'Javascript for Impatient Programmers', author: 'Dr. Axel Rauschmayer' };
var css = { title: 'CSS Secrets', author: 'Lea Verou' };
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Jay Park';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
