/* exported reverse */
/* create storage space for new array
go through each item starting from the last and ending at the first
add each item to the new array
return new array */
function reverse(array) {
  var revArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    revArr.push(array[i]);
  }
  return revArr;
}
