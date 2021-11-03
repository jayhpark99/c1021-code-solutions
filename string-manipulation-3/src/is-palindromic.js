/* exported isPalindromic */
function isPalindromic(string) {
  var noSpaceString = string.split(' ').join('');
  if (noSpaceString.length % 2 === 0) {
    for (var i = 0; i < noSpaceString.length / 2; i++) {
      if (noSpaceString[i] !== noSpaceString[noSpaceString.length - i]) {
        return false;
      }
    }
  } else if (noSpaceString.length % 2 !== 0) {
    for (var j = 0; j < Math.floor(noSpaceString.length / 2); j++) {
      if (noSpaceString[j] !== noSpaceString[noSpaceString.length - (j + 1)]) {
        return false;
      }
    }
  }
  return true;
}
