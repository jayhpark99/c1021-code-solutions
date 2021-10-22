/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('unload', handleUnload);
function handleUnload(event) {
  var todosJSON = JSON.stringify(todos);
  var myStorage = window.localStorage;
  myStorage.setItem('javascript-local-storage', todosJSON);
}
