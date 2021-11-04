/* exported zip */
function zip(first, second) {
  var newArray = [];
  if (first.length > second.length) {
    var length = second.length;
  } else {
    length = first.length;
  }
  for (var i = 0; i < length; i++) {
    var innerArray = [];
    innerArray.push(first[i]);
    innerArray.push(second[i]);
    newArray.push(innerArray);
  }
  return newArray;
}
