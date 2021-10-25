/* exported tail */
/* go through each item starting from the 2nd item to the last item
add each item to the new array
return new array */
function tail(array) {
  var newArr = [];
  for (var i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
