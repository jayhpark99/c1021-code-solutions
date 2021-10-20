/* exported takeRight */
/* create storage space for output
add values from original array to output starting from count number of spaces from the end
if array is empty, return empty array */
function takeRight(array, count) {
  var newArr = [];
  for (var i = array.length - count; i < array.length; i++) {
    newArr.push(array[i]);
    if (array[i] === undefined) {
      return [];
    }
  }
  return newArr;
}
