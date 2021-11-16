/* exported equal */
function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (second[i] !== first[i]) {
      return false;
    }
  }
  return true;
}
