/* exported take */
/* create storage space for output
add each index from the orginal array into the output from the first to count items
if array is empty, return the empty array
otherwise return the output */
function take(array, count) {
  var newArr = [];
  for (var i = 0; i < count; i++) {
    newArr.push(array[i]);
    if (array[i] === undefined) {
      return [];
    }
  }
  return newArr;
}
