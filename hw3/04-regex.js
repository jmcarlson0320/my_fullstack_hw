// Add your code here

// create a callback for pressing 'enter' on the input field?
document.querySelector('input').onchange = function () {
    // extract the text input
    var text = document.querySelector('input').value;

    // create a regex that matches 'string' + '@' + 'string' + '.' + 'string'
    let regex = /\S+@\S+\.\S+/;

    // check for a match and print a message inside the <div> result element
    if (regex.test(text)) {
        document.querySelector('#result').innerHTML = '</br>' + 'Thank You. This is a valid email address.';
    } else {
        document.querySelector('#result').innerHTML = '</br>' + 'Error: Please enter a valid email address';
    }
};