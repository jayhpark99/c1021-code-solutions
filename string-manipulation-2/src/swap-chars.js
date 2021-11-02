/* exported swapChars */
/* create storage space for output
convert string to array separating each character
save the character at firstIndex
save the character at secondIndex
switch the two characters
add each character to the output from left to right
 */
function swapChars(firstIndex, secondIndex, string) {
  var output = '';
  var arr = string.split('');
  var x = arr[firstIndex];
  var y = arr[secondIndex];
  arr[firstIndex] = y;
  arr[secondIndex] = x;
  for (var i = 0; i < arr.length; i++) {
    output = output + arr[i];
  }
  return output;
}
