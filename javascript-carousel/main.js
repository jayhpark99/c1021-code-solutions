var $right = document.querySelector('.fa-angle-right');
var $left = document.querySelector('.fa-angle-left');
var $bulbasoarButton = document.querySelector('.bulbasoar');
var $charmanderButton = document.querySelector('.charmander');
var $squirtleButton = document.querySelector('.squirtle');
var $pikachuButton = document.querySelector('.pikachu');
var $jigglypuffButton = document.querySelector('.jigglypuff');
var $img = document.querySelector('img');
var $outerdiv = document.querySelector('.outerdiv');

var view = 'bulbasoar';

$outerdiv.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.className === 'bulbasoar') {
      $img.setAttribute('src', 'images/001.png');
      view = 'bulbasoar';
    } else if (event.target.className === 'charmander') {
      $img.setAttribute('src', 'images/004.png');
      view = 'charmander';
    } else if (event.target.className === 'squirtle') {
      $img.setAttribute('src', 'images/007.png');
      view = 'squirtle';
    } else if (event.target.className === 'pikachu') {
      $img.setAttribute('src', 'images/025.png');
      view = 'pikachu';
    } else if (event.target.className === 'jigglypuff') {
      $img.setAttribute('src', 'images/039.png');
      view = 'jigglypuff';
    }
    changeButton();
  }
});

$right.addEventListener('click', nextImage);

function nextImage() {
  if (view === 'bulbasoar') {
    $img.setAttribute('src', 'images/004.png');
    view = 'charmander';
  } else if (view === 'charmander') {
    $img.setAttribute('src', 'images/007.png');
    view = 'squirtle';
  } else if (view === 'squirtle') {
    $img.setAttribute('src', 'images/025.png');
    view = 'pikachu';
  } else if (view === 'pikachu') {
    $img.setAttribute('src', 'images/039.png');
    view = 'jigglypuff';
  } else if (view === 'jigglypuff') {
    $img.setAttribute('src', 'images/001.png');
    view = 'bulbasoar';
  }
  changeButton();
}

$left.addEventListener('click', previousImage);
function previousImage(event) {
  if (view === 'bulbasoar') {
    $img.setAttribute('src', 'images/039.png');
    view = 'jigglypuff';
  } else if (view === 'charmander') {
    $img.setAttribute('src', 'images/001.png');
    view = 'bulbasoar';
  } else if (view === 'squirtle') {
    $img.setAttribute('src', 'images/004.png');
    view = 'charmander';
  } else if (view === 'pikachu') {
    $img.setAttribute('src', 'images/007.png');
    view = 'squirtle';
  } else if (view === 'jigglypuff') {
    $img.setAttribute('src', 'images/025.png');
    view = 'pikachu';
  }
  changeButton();
}

function changeButton() {
  $bulbasoarButton.style.backgroundColor = 'white';
  $charmanderButton.style.backgroundColor = 'white';
  $squirtleButton.style.backgroundColor = 'white';
  $pikachuButton.style.backgroundColor = 'white';
  $jigglypuffButton.style.backgroundColor = 'white';
  if (view === 'bulbasoar') {
    $bulbasoarButton.style.backgroundColor = 'black';
  } else if (view === 'charmander') {
    $charmanderButton.style.backgroundColor = 'black';
  } else if (view === 'squirtle') {
    $squirtleButton.style.backgroundColor = 'black';
  } else if (view === 'pikachu') {
    $pikachuButton.style.backgroundColor = 'black';
  } else if (view === 'jigglypuff') {
    $jigglypuffButton.style.backgroundColor = 'black';
  }
  clearInterval(interval);
  interval = setInterval(nextImage, 3000);
}

var interval = setInterval(nextImage, 3000);
