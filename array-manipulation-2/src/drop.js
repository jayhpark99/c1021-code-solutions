/* exported drop */
/* create storage space for output
add each item from original array into new array starting from the count index and to the end of the array */
function drop(array, count) {
  var newArr = [];
  for (var i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
