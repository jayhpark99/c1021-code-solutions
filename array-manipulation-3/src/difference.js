/* exported difference */
function difference(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newArr.push(second[j]);
    }
  }
  return newArr;
}
