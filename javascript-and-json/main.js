/* eslint-disable quotes */

var array = [
  {
    isbn: '123',
    title: 'book1',
    author: 'man1'
  },
  {
    isbn: '456',
    title: 'book2',
    author: 'man2'
  },
  {
    isbn: '789',
    title: 'book3',
    author: 'man3'
  }];

console.log('typeofarray', typeof (array));
console.log('array', array);

var stringify = JSON.stringify(array);
console.log('stringify', stringify);
console.log('typeofstringify', typeof (stringify));

// eslint-disable-next-line quote-props
var string = '{ "id": "1", "name": "guy" }';
console.log('string', string);
console.log('typeofstring', typeof (string));

var parse = JSON.parse(string);
console.log('parse', parse);
console.log('typeofparse', typeof (parse));
