/*
 * Keeping Up With the Javascripts - Part 1: ES6
 * Homework #4: Functions
 * I used the last homework where I implemented functions
 */

/* 
 * All men are mortal
 * Socrates is a man.
 * Therefore, socrates is mortal.
 */

let men = ["Aristoles", "Socrates", "Euripides"];

const isMortal = (name) => {
  let isManMortal = false;
  
  men.forEach( (man) => {
    if (man === name) {
      isManMortal = true;
    }
  });
  return isManMortal;
};

if (isMortal("Socrates")) {
  console.log("Socrates is mortal.");
} else {
  console.log("Socrates is not mortal.");
}

/* 
 * This cake is either vanilla or chocolate.
 * This cake is not chocolate.
 * Therefore, this cake is vanilla.
 */

const cake = (possibilities = [], isChocolate = false) => {
  const option = (isChocolate === true) ? 1 : 0;
  return "The cake is " + possibilities[option] + ".";
}

console.log(cake(["vanilla", "chocolate"], false));
