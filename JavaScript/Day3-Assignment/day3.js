let statement = "Hello Welcome to Learn JavaScript Day-3";
console.log(statement);
  
// \n --> Break-line
let statement2 = "Hello! \nWelcome to Learn JavaScript Day-3";
console.log(statement2);

// \t --> Gives 8 spaces
let statement3 = "Sr.no. \t Name \t\t Surname";
let substatement3 = "1 \t\t Kumkum \t Haweliakr"
console.log(statement3);
console.log(substatement3);

// Include double quote and single quote and slash
let statement4 = "Hello\\ \'Welcome\' to Learn \"JavaScript Day-3\"";
console.log(statement4);

// String Manipulation
let string = "HighSchool";
console.log(`Length of the string \"HighSchool\" is ${string.length}`);
console.log(`String in upper case ${string.toUpperCase}`);
console.log(`String in lower case ${string.toLowerCase}`);

// substr() and subscript()
console.log(`substr of the string \"${string.substr(4,6)}\"`);
console.log(`substring of the string \"${string.substring(1,5)}\"`);

// Use of split
console.group(`Split of string ${string.split("")}`);

// Trim --> Removes the space from front & last
let string2 = " HELLO ";
console.log(string2);
console.log(string2.trim());

// Find the character at the given index 
let string3 = "Green";
let lastIndex = string3.length - 1; 
console.log(string3.charAt(lastIndex));

// Find the strings 1st and last word 
console.log(string3.startsWith("HELLO"));
console.log(string3.endsWith("World"));




// MATH METHODS 
let pi = Math.PI;
console.log(pi);

// Area of circle 
let radius = 5;
let area = pi * radius * radius ;
console.log(`Area of a Circle = ${area}`);

let gravity = 9.8;
console.log(Math.round(gravity));
console.log(Math.floor(gravity));
console.log(Math.ceil(gravity));

let array = [0,5,35,6,7,54];
console.log(Math.max(...array));
console.log(Math.min(...array));

// Random 
console.log(Math.floor(Math.random() * 8)); // 0 - 9
console.log(Math.random()); //0.01 - 0.9

// abs - absolute
let value = 87.837
console.log(Math.abs(value));

// Square-root 
console.log(Math.sqrt(100));
console.log(Math.pow(5,3));

// Conversion of number to string and vice versa 
let sampleString = "0.28";
let sampleNumber = +sampleString;
console.log(typeof(sampleString));
let sampleNumber2 = parseInt(sampleString);
console.log(sampleNumber2);

// Number to string 
let num = 98;
console.log(typeof(num));
let convertedNum = toString(num);
console.log(typeof(convertedNum));