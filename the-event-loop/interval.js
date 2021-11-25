let count = 3;
var intervalID = setInterval(() => {
  if (count === 0) {
    console.log('Blast Off!');
    clearInterval(intervalID);
    return;
  }
  console.log(count--);
}, 1000);
