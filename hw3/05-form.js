function onSubmit (event) {
  // Add your code here

  // needed in order to process the form input manually with javascript...
  event.preventDefault();

  // get fields from the form
  var form = document.querySelector('#form');

  var name = form.elements.name.value;
  var email = form.elements.email.value;
  var comments = form.elements.comments.value;
  if (comments == '') {
    comments = 'No feedback was submitted.';
  }

  var newsletter = '';
  if (form.elements.checkbox.checked) {
    newsletter = 'Yes, I would like to join the newsletter.'
  } else {
    newsletter = 'No, thank you.'
  }

  // print everything to the console
  console.group('========= Form Submission =========');
  console.log('Name: ' + name);
  console.log('Email: ' + email);
  console.log('Feedback: ' + comments);
  console.log('Newsletter: ' + newsletter);
  console.groupEnd();
}

// setup onSubmit as a callback function for the form submission event
var myForm = document.querySelector('#form');
myForm.addEventListener("submit", onSubmit);