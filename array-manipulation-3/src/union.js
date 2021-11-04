/* exported union */
function union(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (!newArr.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!newArr.includes(second[j])) {
      newArr.push(second[j]);
    }
  }
  return newArr;
}
