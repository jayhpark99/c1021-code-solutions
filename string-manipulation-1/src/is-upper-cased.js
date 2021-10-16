/* exported isUpperCased */
/* if original word is equal to word after its been upper cased
then its true otherwise it is false */
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
