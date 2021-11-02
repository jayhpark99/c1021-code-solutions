/* exported defaults */
/* go through each key in source
if the target does not contain the key
add the key to target */
function defaults(target, source) {
  for (var sourceKey in source) {
    if (!target.hasOwnProperty(sourceKey)) {
      target[sourceKey] = source[sourceKey];
    }
  }
}
