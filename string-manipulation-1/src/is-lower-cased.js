/* exported isLowerCased */
/* if original word is equal to word after its been lower cased
then its true otherwise it is false */
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
