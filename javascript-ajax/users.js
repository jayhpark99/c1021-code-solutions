var $userList = document.querySelector('#user-list');
var newXMLHttpRequest = new XMLHttpRequest();
newXMLHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
newXMLHttpRequest.responseType = 'json';
newXMLHttpRequest.addEventListener('load', function () {
  console.log(newXMLHttpRequest.status);
  console.log(newXMLHttpRequest.response);
  for (var i = 0; i < newXMLHttpRequest.response.length; i++) {
    var $li = document.createElement('li');
    $li.textContent = newXMLHttpRequest.response[i].name;
    $userList.appendChild($li);
  }
});
newXMLHttpRequest.send();
