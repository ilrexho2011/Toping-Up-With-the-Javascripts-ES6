/*
 * Keeping Up With the Javascripts - ES6:   Homework #6: LOOPS
 * 
 * Write a program that prints the numbers from 1 to 100. But for multiples of
 * three print "Fizz" instead of the number and for the multiples of five print "Buzz".
 * For numbers which are multiples of both three and five print "FizzBuzz".
 */

const isPrime = (num) => {
  let i = 2;
  const limit = Math.sqrt(num); // efficiently control untill sqrt of the number
  while (i <= limit) {
      if (num % i++ < 1) return false;
  }
  return num > 1;
}

for (let nr = 1; nr <= 100; nr++) {
  if (isPrime(nr)) {
    console.log("Prime");
  } else if (nr % 3 === 0 && nr % 5 === 0) {
    console.log("FizzBuzz");
  } else if (nr % 3 === 0) {
    console.log("Fizz");
  } else if (nr % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(nr);
  }
}