/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i] + suffix;
  }
  return words;
}
