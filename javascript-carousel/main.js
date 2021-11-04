var $right = document.querySelector('.fa-chevron-right');
var $left = document.querySelector('.fa-chevron-left');
var $img = document.querySelector('img');
var $outerdiv = document.querySelector('.outerdiv');
var $icons = document.querySelectorAll('[data]');

var currentImg = 0;
var imgArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

$outerdiv.addEventListener('click', changeImage);
function changeImage(event) {
  if (event.target.className === 'far fa-circle') {
    currentImg = parseInt(event.target.getAttribute('data'));
    $img.setAttribute('src', imgArray[currentImg]);
    change();
  }
}

$right.addEventListener('click', nextImage);

function nextImage() {
  currentImg++;
  if (currentImg >= imgArray.length) {
    currentImg = 0;
  }
  change();
}

$left.addEventListener('click', previousImage);
function previousImage(event) {
  currentImg--;
  if (currentImg < 0) {
    currentImg = imgArray.length - 1;
  }
  change();
}

function changeButton() {
  for (var i = 0; i < $icons.length; i++) {
    $icons[i].className = 'far fa-circle';
    if (currentImg === i) {
      $icons[i].className = 'fas fa-circle';
    }
  }
  clearInterval(interval);
  interval = setInterval(nextImage, 3000);
}

var interval = setInterval(nextImage, 3000);

function change() {
  $img.setAttribute('src', imgArray[currentImg]);
  changeButton();
}
