/* exported includes */
/* go through each index in the array
if the value at the index is equal to the value
return true
if the value isnt found return false */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
