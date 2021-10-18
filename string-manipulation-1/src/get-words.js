/* exported getWords */
/* separate words using spaces and save that */
function getWords(string) {
  var arr = string.split(' ');
  if (string === '') {
    arr = [];
  }
  return arr;
}
