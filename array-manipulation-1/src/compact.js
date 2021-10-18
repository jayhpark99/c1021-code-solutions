/* eslint-disable no-empty */
/* exported compact */
/* create storage space for new array
check if each item in the array is false, null, true, -0, -0, undefined, or ''
if they are, ignore them; if they are not, add the item to the new array
return the array */
function compact(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === false ||
      array[i] === null ||
      Number.isNaN(array[i]) === true ||
      array[i] === 0 ||
      array[i] === undefined || array[i] === '') {
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
