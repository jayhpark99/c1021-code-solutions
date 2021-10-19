/* exported ransomCase */
/* create storage space for output (string)
lower case first letter of string and add it to output
check the rest of the letters in the string and add lowercase character to output if is it an even index
otherwise add uppercase character to output if it is an odd index  */
function ransomCase(string) {
  var output = '';
  output = output + string[0].toLowerCase();
  for (var i = 1; i < string.length; i++) {
    if (i % 2 === 0) {
      output = output + string[i].toLowerCase();
    } else {
      output = output + string[i].toUpperCase();
    }
  }
  return output;
}
