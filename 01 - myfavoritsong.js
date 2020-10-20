/*
 * Ilirjan Rexho
 * Homework #1: Types of Data
 * Keeping Up With the Javascripts in ES6
 *
 * ABBA: THE DAY BEFORE YOU CAME 1986
 *
 * Desribing my favorite Song
 */

var author = "ABBA"; // Author's Name
var title = "The day before you came"; // Song title
var year = 1986; // Year when was performed for the first time
var genre = "Pop"; // Genre of the Song
var timeDuration = 349; // Time duration in seconds of the Song
var groupMembers = ["Agnetha Fältskog", " Anni-Frid Lyngstad", " Björn Ulvaeus", " Benny Andersson"]; // Members of the ABBA group
var IsThatAmazing = true; // The song is very amaizing indeed

// Here I'm presenting the information to the console
console.log(author);
console.log(title);
console.log(year);
console.log(genre);
console.log(timeDuration + " sec");
console.log("The members of ABA: " + groupMembers);
console.log(groupMembers[0]);
console.log(IsThatAmazing);

// illustrating Objects
var abbaAlbums = {
1973: "Ring Ring",
1974: "Waterloo",
1976: "Arrival",
1977: "ABBA",
1978: "The Album",
1979: "Voulez-Vous",
1965: "Rubber Soul",
1980: "The Visitors",
1981: "Super Trouper",
}
// Displaying objects
console.log(abbaAlbums);
console.log(abbaAlbums[1986]);

// Arrays in JS
var formats = [1992, "ABBA Gold", "VHS", "Video CD", "LaserDisc"];
// Display the formats of music production
console.log(formats[1]);