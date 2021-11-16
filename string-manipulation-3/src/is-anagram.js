/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstNoSpace = firstString.split('').sort().join('').trim();
  var secondNoSpace = secondString.split('').sort().join('').trim();
  if (firstNoSpace === secondNoSpace) {
    return true;
  } else {
    return false;
  }
}
