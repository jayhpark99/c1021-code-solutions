setTimeout(sayHello, 2000);
var $h1 = document.querySelector('h1');

function sayHello() {
  $h1.textContent = 'Hello There';
}
