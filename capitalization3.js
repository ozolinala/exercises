// Given a single name string in an unknown case, e.g. “peter” or “PETER” - 
// create a new string with the same name, where the third letter is uppercase,
//  and the rest is lowercase. I.e. “peTer”.

// Hint: use substring, toUpperCase, toLowerCase and simple string concatenation
// Test your code with various crazy combinations of your own name, like “pETer”, “PEter”, 
// “peteR”, “PEtER” and so on.

// Make sure that it also works with longer names. Don't worry about names shorter than 3 characters.

"use strict";

let unknown = "peter";

let name =
unknown.substring(0,2) + unknown.substring(2,3).toUpperCase() + unknown.substring(3);

console.log(name);

