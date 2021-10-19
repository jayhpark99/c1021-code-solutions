var swap = true;
var $lightbulb = document.querySelector('.lightbulb');
var $background = document.querySelector('.background');
$lightbulb.addEventListener('click', increment);
function increment() {
  swap = !swap;
  if (swap === true) {
    $lightbulb.className = 'lightbulb on';
    $background.className = 'background backgroundon';
  } if (swap === false) {
    $lightbulb.className = 'lightbulb off';
    $background.className = 'background backgroundoff';
  }
}
