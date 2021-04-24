document.querySelector('#reverse').onclick = function () {
  // Add your code here

  // get the number from the input field
  var input = document.querySelector('#input').value;

  // check that it is an 8 digit number
  // if not, send alert and return
  if (input.length != 8) {
    alert('input must be an 8-digit number');
    return;
  }

  // reverse the number
  array = input.split("");    // convert to array
  array.reverse();            // reverse the array
  reversed = array.join("");  // convert back to string

  // write the reversed number back to the input field
  document.querySelector('#input').value = reversed;
};
