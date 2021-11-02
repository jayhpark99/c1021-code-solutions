/* exported truncate */
/* create storage space for output
check if the length of the string is less than length; if so, return original string + ...
if not, go through each character of the string from the first character to the given length
add that character to output
add ... to the new string */
function truncate(length, string) {
  var newString = '';
  if (string.length < length) {
    return string + '...';
  }
  for (var i = 0; i < length; i++) {
    newString += string[i];
  }
  return newString + '...';
}
