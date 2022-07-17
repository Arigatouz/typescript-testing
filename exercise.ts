// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

const twoFer = (name: string = "you"): string => {
  return `one for ${name}, one for me`; //?
};

twoFer(); // => "One for you, one for me"
twoFer("Elton"); //=> "One for Elton, one for me"

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year

// const isLeapYear = (year: number): boolean => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

//! refactor
const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2012)); // => true
console.log(isLeapYear(2013)); // => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

//write a function that determines if the number is prime or not
const isPrime = (num: number): string | boolean => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Number is not prime";
    }
  }
  return "Number is prime";
};

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(1));
