/* exported reverseWords */
function reverseWords(string) {
  var newString = string.split(' ');
  for (var i = 0; i < newString.length; i++) {
    var reversedString = reverse(newString[i].split(''));
    newString[i] = reversedString.join('');
    var output = newString.join(' ');
  }
  return output;
}

function reverse(array) {
  var revArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    revArr.push(array[i]);
  }
  return revArr;
}
