const takeAChance = require('./take-a-chance');

const promise = takeAChance('Jay Park')

promise.then((value) => console.log(value))
promise.catch((error) => console.log(error.message))
