/*
 * Homework #2: Variables and Constants  ---  Ilirjan Rexho
 */

// Each of them is used to declare variables, and save values in memory,
// const is a type value that is assigned and can not be changed, let and var can
// be changed, but they are different among them. The difference is regarded as the scope.
// They can be both global variables, but var is in the scope of functions, and let is in
// the scope of the enclosing block (ie: object, if, for, while).

var number1 = 176;

console.log("Variables and Constants:");
const title = "Keeping Up With the Javascripts: ES6";
// student = "Ilirjan Rexho";
console.log(title);

let number2 = 235.48;

function useOfVar() {
  console.log("Use of var:");
  var number1 = 194;
  if (true) {
      var number1 = 46;
      console.log(number1); // displays 46
  }
  console.log(number1); // displays 194
}

function useOfLet() {
  console.log("Use of let:");
  let number2 = 194;
  if (true) {
      let number2 = 46;
      console.log(number2); // displays 46
  }
  console.log(number2); // displays 194
}

useOfVar();
useOfLet();

console.log("Global scope of var & let:");
console.log(number1); // displays 176
console.log(number2); // displays 235.48

// ------------------------- EXTRA CREDIT ----------------------------
// Hoisting? What does the word mean, and how does it work in Javascript

// Hoisting is the default behavior of JavaScript to move all variable
// declarations to the top of the scope (script file or function definition).
// It's important to note that hoisting only works with var, not let and const.
// JavaScript only hoists declarations, not the initialisations.

value = 8; // assigning value to a not pre-defined variable
console.log("Hoisting in Javascript");
console.log(value); // display of the variable's value
var value; // defining variable