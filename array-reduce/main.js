const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((sum, number) => sum + number)
console.log(sum)

const product = numbers.reduce((product, number) => product * number)
console.log(product)

const balance = account.reduce((balance, account) => {
  if (account.type === 'deposit') {
    return balance + account.amount
  } else {
    return balance - account.amount
  }
}, 0)
console.log(balance)

const composite = traits.reduce((outputObj, trait) => {
  Object.assign(outputObj, trait)
  return outputObj
})
console.log(composite)
