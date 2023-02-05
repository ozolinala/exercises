"use strict";

const longline ="a very, very, very, very, very, VERY \n \
long line of text, that spans across the width of the editor";

// const name ="Laura";
// const animal ="cat";
// const animalname ="Persika";

// console.log(`My name is ${name}.\n\
// I have a ${animal} called ${animalname}.`)

// const len = name.length;
// console.log(`${name} is ${len} characters long`)

const name ="Albus Percival Wulfric Brian Dumbledore";
const total =name.length;
const letter =name[2];
const lettertwo =name[6];

console.log(`Total number of characters is ${total}`);
console.log(`The character at index 2 is ${letter}`);
console.log(`The character at index 6 is ${lettertwo}`);

const str1 ="   There is    space here \n  ";
const str2 = str1.trim();