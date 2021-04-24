document.querySelector('#reverse').onclick = function () {
  // Add your code here

  // get the number from the input field
  var input = document.querySelector('#input').value;

  // check that it is an 8 digit number
  // if not, write error to results div at bottom of main
  if (input.length != 8) {
    document.querySelector('#result').innerHTML = '</br>' + 'Error: please input an 8-digit number';
    return;
  }

  // reverse the number using built-in functions
  array = input.split("");    // convert to array
  array.reverse();            // reverse the array
  reversed = array.join("");  // convert back to string

  // write the reversed number into the results <div> at bottom of main  
  document.querySelector('#result').innerHTML = '</br>' + input + ' --> ' + reversed;

};
