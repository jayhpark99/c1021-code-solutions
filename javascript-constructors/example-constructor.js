function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof of ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);
var newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor:', newExampleConstructor);
var isInstanceOf = newExampleConstructor instanceof ExampleConstructor;
console.log('value of isInstanceOf:', isInstanceOf);
