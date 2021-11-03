var $h1 = document.querySelector('h1');
var interval = setInterval(countdown, 1000);
function countdown() {
  if (parseInt($h1.textContent) === 1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  } else {
    $h1.textContent = parseInt($h1.textContent) - 1;
  }
}
