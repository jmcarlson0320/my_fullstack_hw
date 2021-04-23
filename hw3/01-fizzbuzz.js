function divisible(n, x) {
  result = n % x;
  if (result === 0) {
    return true;
  } else {
    return false;
  }
}

function fizzbuzz() {
  // Add your code here
  for (i = 1; i < 100; i++) {
    var three = divisible(i, 3);
    var five = divisible(i, 5);

    if (three && five) {
      console.log('fizzbuzz');
    } else if (three) {
      console.log('fizz');
    } else if (five) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();
