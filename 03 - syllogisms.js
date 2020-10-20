/*
 * Homework #3: If Statements and Operators
 * Keeping Up With the Javascripts - Part 1: ES6
 */

/* 
 * All men are mortal
 * Socrates is a man.
 * Therefore, socrates is mortal.
 */

let men = ["Aristoles", "Socrates", "Euripides"];

if (men.indexOf("Socrates") !== -1) {
  console.log("Socrates is mortal.");
} else {
  console.log("Socrates is not mortal.");
}

/* 
 * This cake is either vanilla or chocolate.
 * This cake is not chocolate.
 * Therefore, this cake is vanilla.
 */

let cake = "vanilla";

if (cake !== "chocolate") {
  console.log("This cake is vanilla.");
} else {
  console.log("This cake is chocolate.");
}