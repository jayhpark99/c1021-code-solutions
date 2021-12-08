function reduce(array, reducer, initialValue) {
  let i = 0
  let output = initialValue
  if (arguments.length === 2) {
    output = array[0]
    i = 1
  }
  for (; i < array.length; i++) {
    output = combine(output, array[i])
  }
  return output
}
