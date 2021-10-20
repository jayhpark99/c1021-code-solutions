function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name, event.target.value);
}

var $input0 = document.forms[0].elements[0];
var $input1 = document.forms[0].elements[1];
var $textarea = document.querySelector('textarea');

$input0.addEventListener('focus', handleFocus);
$input0.addEventListener('blur', handleBlur);
$input0.addEventListener('input', handleInput);

$input1.addEventListener('focus', handleFocus);
$input1.addEventListener('blur', handleBlur);
$input1.addEventListener('input', handleInput);

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);

// alternate method
// var $input = document.querySelectorAll('input');

// $input[0].addEventListener('focus', handleFocus);
// $input[0].addEventListener('blur', handleBlur);
// $input[0].addEventListener('input', handleInput);

// $input[1].addEventListener('focus', handleFocus);
// $input[1].addEventListener('blur', handleBlur);
// $input[1].addEventListener('input', handleInput);
