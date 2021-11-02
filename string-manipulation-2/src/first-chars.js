/* exported firstChars */
/* create storage space for output
if length is greater than the number of characters in string
then return original string
if not, add each character starting from the first item to length'th to the output */
function firstChars(length, string) {
  var output = '';
  if (length > string.length) {
    return string;
  }
  for (var i = 0; i < length; i++) {
    output = output + string[i];
  }
  return output;
}
