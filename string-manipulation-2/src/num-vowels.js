/* exported numVowels */
/* create storage space for output starting at 0
go through each letter in the string and check if it is a vowel
if yes, increase output by 1
return output */
function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' ||
    string[i] === 'e' ||
    string[i] === 'i' ||
    string[i] === 'o' ||
    string[i] === 'u' ||
    string[i] === 'A' ||
    string[i] === 'E' ||
    string[i] === 'I' ||
    string[i] === 'O' ||
    string[i] === 'U') {
      count++;
    }
  }
  return count;
}
