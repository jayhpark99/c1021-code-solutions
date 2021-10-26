/* exported chunk */
// function chunk(array, size) {
//   var output = [];
//   for (var i = 0; i < array.length; i += size) {
//     var newArr = [];
//     for (var j = i; j < i + size; j++) {
//       // if (array[j] === undefined) {
//       //    break;
//       // }
//       newArr.push(array[j]);
//     }
//     output.push(newArr);
//   }
//   return output;
// }

function chunk(array, size) {
  var output = [];
  for (var i = 0; i < array.length; i += size) {
    var newArr = array.slice(i, i + size);
    output.push(newArr);
  }
  return output;
}
