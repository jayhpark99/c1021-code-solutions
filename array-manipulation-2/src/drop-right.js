/* exported dropRight */
/* create storage space for output
go through each item in the array starting from the first to count number of items
add each value to output
if the array is empty, return empty array
otherwise return output */
function dropRight(array, count) {
  var newArr = [];
  for (var i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
    if (array[i] === undefined) {
      return [];
    }
  }
  return newArr;
}
