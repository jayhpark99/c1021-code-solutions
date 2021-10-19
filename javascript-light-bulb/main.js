var count = 0;
var $lightbulb = document.querySelector('.lightbulb');
var $background = document.querySelector('.background');
$lightbulb.addEventListener('click', increment);
function increment() {
  count++;
  if (count % 2 === 0) {
    $lightbulb.className = 'lightbulb on';
    $background.className = 'background backgroundon';
  } if (count % 2 !== 0) {
    $lightbulb.className = 'lightbulb off';
    $background.className = 'background backgroundoff';
  }
}
