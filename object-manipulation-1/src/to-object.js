/* exported toObject */
/* create storage for an object for output
assign the 1st item as the property of the object and 2nd item as the value of that property
return object */
function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
