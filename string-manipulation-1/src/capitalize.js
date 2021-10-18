/* exported capitalize */
/* make the whole word upper case
save first letter of word
make rest of word lower case and save that in a different storage space
add the two parts together
 */

function capitalize(word) {
  word = word.toUpperCase();
  var word1 = word[0];
  var word2 = word.slice(1).toLowerCase();
  word = word1 + word2;
  return word;
}
