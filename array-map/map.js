function map(inputArray, transform) {
  const outputArray = []
  for (let i = 0; i < inputArray.length; i++) {
    outputArray.push(transform(inputArray[i]))
  }
  return outputArray
}

console.log(map([1,2,3,4,5,6], number => number * 10))
