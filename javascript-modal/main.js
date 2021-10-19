var $blue = document.querySelector('.blue');
var $modal = document.querySelector('.modal');
var $red = document.querySelector('.red');
var $background = document.querySelector('.background');
$blue.addEventListener('click', popup);
function popup() {
  $modal.className = 'modal on';
  $background.className = 'background dark';
}

$red.addEventListener('click', popdown);
function popdown() {
  $modal.className = 'modal off';
  $background.className = 'background';
}
