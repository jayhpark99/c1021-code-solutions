/* exported numVowels */
/* create storage space for output starting at 0
go through each letter in the string and check if it is a vowel
if yes, increase output by 1
return output */
function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    var lowerCased = string[i].toLowerCase();
    if (lowerCased === 'a' ||
    lowerCased === 'e' ||
    lowerCased === 'i' ||
    lowerCased === 'o' ||
    lowerCased === 'u'
    ) {
      count++;
    }
  }
  return count;
}
