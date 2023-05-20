document.getElementById('suggestion-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var suggestion = document.getElementById('suggestion').value;
  var confirmation = document.getElementById('confirmation');

  // Perform validation here if needed

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('suggestion').value = '';

  // Display confirmation message
  confirmation.innerHTML = 'Thank you, ' + name + '! Your suggestion has been submitted.';
});