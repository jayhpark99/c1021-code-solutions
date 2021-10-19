var count = false;
var $blue = document.querySelector('.blue');
var $modal = document.querySelector('.modal');
var $red = document.querySelector('.red');
var $background = document.querySelector('.background');
$blue.addEventListener('click', popup);
function popup() {
  count = true;
  if (count === true) {
    $modal.className = 'modal on';
    $background.className = 'background dark';
  }
}

$red.addEventListener('click', popdown);
function popdown() {
  count = false;
  if (count === false) {
    $modal.className = 'modal off';
    $background.className = 'background';
  }
}
