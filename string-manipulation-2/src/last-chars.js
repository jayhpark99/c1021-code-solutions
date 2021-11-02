/* exported lastChars */
/* create storage space for output
if length is greater than the length of the string, then return original string
if not, add each character starting from the end to length amount of characters to output
return output */
function lastChars(length, string) {
  var output = '';
  if (length > string.length) {
    return string;
  }
  for (var i = string.length - 1; i >= string.length - length; i--) {
    output = string[i] + output;
  }
  return output;
}
