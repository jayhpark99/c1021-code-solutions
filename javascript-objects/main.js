var student = {
  firstName: 'Jay',
  lastName: 'Park',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previusOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Hyundai',
  model: 'Elantra',
  year: 2019
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'joe',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
