/* exported pick */
/* create storage space for output
create storage space for all words
create storage space for all numbers
compare each word in the keys array
against each word in words
if the words are the same
unless the value is undefined
make the property of the output the word and the corresponding number as the value */
function pick(source, keys) {
  var obj = {};
  var property = Object.keys(source);
  var values = Object.values(source);
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < property.length; j++) {
      if (keys[i] === property[j]) {
        if (values[j] === undefined) break;
        obj[keys[i]] = values[j];
      }
    }
  }
  return obj;
}
