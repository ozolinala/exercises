// Use the 3caPitalization exercise as a basis for this exercise. 
// Modify the code, so that only the first letter is upper case, 
// and the rest is lower case.

"use strict";

let unknown = "petERfewfwefsAADSSFDedf";

let name =
unknown.substring(0,1).toUpperCase() + unknown.substring(1).toLowerCase();
console.log(name);