function onSubmit (event) {
  // Add your code here

  // needed in order to process the form input manually with javascript...
  event.preventDefault();

  // see if this is being called
  console.log('function called');

  // get fields from the form
  var form = document.querySelector('#form');
  var name = form.elements.name.value;
  var email = form.elements.email.value;
  var comments = form.elements.comments.value;

  // print them to the console
  
}

// setup onSubmit as a callback function for the form submission event
var myForm = document.querySelector('#form');
myForm.addEventListener("submit", onSubmit);