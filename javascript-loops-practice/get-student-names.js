/* exported getStudentNames */
function getStudentNames(students) {
  for (var i = 0; i < students.length; i++) {
    students[i] = students[i].name;
  }
  return students;
}
