var $letters = document.querySelectorAll('span');
var count = 0;
var sentence = 'grumpy wizards make toxic brew';
document.addEventListener('keydown', function (event) {
  if (event.key === sentence[count]) {
    $letters[count].className = 'correct';
    $letters[count + 1].className = 'next';
    count++;
  } else {
    $letters[count].className = 'wrong';
  }
});
