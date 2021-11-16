/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    } else {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
  }
  return newArray;
}
