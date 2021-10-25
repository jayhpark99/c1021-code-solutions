/* exported getKeys */
/* create storage space for array
go through each property in the object
add it to new array
return new array */
function getKeys(object) {
  var newArr = [];
  for (var property in object) {
    newArr.push(property);
  }
  return newArr;
}
