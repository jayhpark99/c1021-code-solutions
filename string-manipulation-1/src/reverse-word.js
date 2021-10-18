/* exported reverseWord */
/* create storage for output
for each character, add that character to the start of the output */
function reverseWord(word) {
  var revWord = '';
  for (var i = 0; i < word.length; i++) {
    revWord = word[i] + revWord;
  }
  return revWord;
}
