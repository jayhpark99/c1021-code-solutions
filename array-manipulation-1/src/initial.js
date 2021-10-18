/* exported initial */
/* create storage space for new array
go through each item, starting from the first and ending at 2nd to last
add each item into the new array
return the array */
function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
