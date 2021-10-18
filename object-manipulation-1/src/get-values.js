/* exported getValues */
/* create storage space for output
go through each value in the object
add to output
return array */
function getValues(object) {
  var newArr = [];
  for (var property in object) {
    newArr.push(object[property]);
  }
  return newArr;
}
