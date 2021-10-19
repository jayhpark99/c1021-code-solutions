/* exported capitalizeWord */
/* if the word capitalized is 'JAVASCRIPT' then set word to be 'JavaScript'
if not, capitalize the word and set the first letter to word1
set the tail of the string to word2 and lower case it
set word to be word1 + word2
return word */
function capitalizeWord(word) {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    word = 'JavaScript';
  } else {
    word = word.toUpperCase();
    var word1 = word[0];
    var word2 = word.slice(1).toLowerCase();
    word = word1 + word2;
  }
  return word;
}
