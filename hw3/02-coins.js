let calculateChange = (input) => {
  // Add your code here

  // start the output string
  var output = "";
  output = output + input + ' ==> ';

  // check bounds
  if (input > 10) {
    return output + 'Error: input too large';
  }

  // struct for holding change values
  var change = {
    dollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  }

  // use cents so we don't worry about floating point complications
  var cents = input * 100;

  // calculate the change and save it to the struct
  change.dollar = Math.floor(cents / 100);
  cents = cents % 100;
  change.quarter = Math.floor(cents / 25);
  cents = cents % 25;
  change.dime = Math.floor(cents / 10);
  cents = cents % 10;
  change.nickel = Math.floor(cents / 5);
  cents = cents % 5;
  change.penny = cents;



  // build the output string using info from the struct
  for (property in change) {
    if (change[property] != 0) {
      output = output + change[property] + ' ';
      if (change[property] > 1 && property != 'penny') {
        output = output + property + 's, ';
      } else if (change[property] > 1 && property == 'penny') {
        output = output + 'pennies ';
      } else if (change[property] == 1 && property != 'penny') {
        output = output + property + ', ';
      } else {
        output = output + property;
      }
    }
  }

  // return the output string
  return output;
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.72 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
