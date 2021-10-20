var $contactform = document.querySelector('#contact-form');
$contactform.addEventListener('submit', logData);

function logData(event) {
  event.preventDefault();
  var messageData = {
    name: $contactform.elements.name.value,
    email: $contactform.elements.email.value,
    message: $contactform.elements.message.value
  };
  console.log('messageData:', messageData);
  document.getElementById('contact-form').reset();
}
