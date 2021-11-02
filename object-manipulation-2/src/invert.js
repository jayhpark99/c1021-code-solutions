/* exported invert */
/* create storage space for output
for each key in the object
save the key
save the value
set the key of obj to value and the value of obj to key
return obj */
function invert(source) {
  var obj = {};
  for (var key in source) {
    var property = key;
    var value = source[key];
    obj[value] = property;
  }
  return obj;
}
