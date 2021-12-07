function filter(array, predicate) {
  const filteredArray = []
  for (let i = 0; i < array.length; i++){
    if (predicate(array[i])) filteredArray.push(array[i])
  }
  return filteredArray
}

const newArr = filter([1,2,3,4,5,6,8,9,10], (element) => element % 2 === 0)

console.log(newArr)
