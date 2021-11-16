/* exported titleCase */
function titleCase(string) {
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    array[0] = array[0][0].toUpperCase() + lastChars(array[0].length - 1, array[0]);
    if (array[i].toLowerCase() === 'javascript') {
      array[i] = 'JavaScript';
    } else if (array[i].toLowerCase() === 'javascript:') {
      array[i] = 'JavaScript:';
    } else if (array[i].toLowerCase() === 'api') {
      array[i] = 'API';
    } else if (array[i].length > 2 && array[i] !== 'for' && array[i] !== 'the') {
      array[i] = array[i][0].toUpperCase() + lastChars(array[i].length - 1, array[i]);
    }
    if (array[i].endsWith(':')) {
      array[i + 1] = array[i + 1][0].toUpperCase() + lastChars(array[i + 1].length - 1, array[i + 1]);
    }
    if (array[i].includes('-')) {
      var newArray = array[i].split('-');
      newArray[1] = newArray[1][0].toUpperCase() + lastChars(newArray[1].length - 1, newArray[1]);
      array[i] = newArray.join('-');
    }
  }
  var newString = array.join(' ');
  return newString;
}

function lastChars(length, string) {
  var output = '';
  if (length > string.length) {
    return string;
  }
  for (var i = string.length - 1; i >= string.length - length; i--) {
    output = string[i] + output;
  }
  return output;
}
