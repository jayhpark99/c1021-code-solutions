/* exported capitalizeWords */
/* create storage space for output
lowercase the sentence and save it
split the sentence at every space and save it
go through each word and save all letters but the first
set the output to be whatever it was before plus the first letter(uppercased) plus the saved letters + a space
get rid of spaces
return output */
function capitalizeWords(string) {
  var output = '';
  var lowercase = string.toLowerCase();
  var arr = lowercase.split(' ');
  for (var i = 0; i < arr.length; i++) {
    var tail = arr[i].slice(1);
    output = output + arr[i][0].toUpperCase() + tail + ' ';

  }
  output = output.trim();
  return output;
}
