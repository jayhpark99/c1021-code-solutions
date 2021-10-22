/* exported omit */
/* create storage space for output
create storage space for all words
create storage space for all numbers
check if each word in the words array
is not included in keys, if it is not,
add the property and value to output
 */
function omit(source, keys) {
  var obj = {};
  var property = Object.keys(source);
  var values = Object.values(source);
  for (var i = 0; i < property.length; i++) {
    if (!keys.includes(property[i])) {
      obj[property[i]] = values[i];
    }
  }
  return obj;
}
