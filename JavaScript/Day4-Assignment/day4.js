// TOPIC --> Array 
let sampleArray = [];
console.log(typeof(sampleArray));

let arr_10 = Array(10);
console.log(arr_10);
console.log(arr_10.fill("Hi"));

// lenght 
console.log(arr_10.length);
console.log(arr_10.length-1);
 
// random element 
let num_arr = [20,38,48,22,34,45];
console.log(num_arr[num_arr.length-3]);

// position 
console.log(num_arr[5]);

// replace 
console.log(num_arr[4]);
console.log(num_arr[4]=0);

// concating the array 
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
console.log(arr1.concat(arr2));

// Finding element in array 
console.log(arr1.indexOf(7));
console.log(arr1.indexOf(3));

// Slice and Splice 
console.log(arr1.slice(0,3));
console.log(arr1.splice(2,5));

// Remove and add elements 
// Push, pop used for last elements
let city = ['Nagpur','Mumbai',"Hydrabad",'Pune'];
console.log(city);
city.push('Kolkatta');
console.log(city);
city.pop();
console.log(city);

// Shift, unshift used for first element 
city.unshift("Manali");
console.log(city);
city.shift();
console.log(city);

// Reverse the string 
let str = "JavaScript";
console.log(str);
console.log(str.split("").reverse().join(""));






// TOPIC --> Operators 
// 1. Arithematic Operators: +, -, *, /, %, **
let num1 = 20;
let num2 = 10;
console.log(`Addition : ${num1 + num2}`);
console.log(`Subtraction : ${num1 - num2}`);
console.log(`Division : ${num1 / num2}`);
console.log(`Multiplication : ${num1 * num2}`);
console.log(`Remainder : ${num1 % num2}`);
console.log(`Power : ${num1 ** num2}`);

// 2. Assignment Operator: +=, -=, /=, *=, %=

// 3. Comparison Operator: ==, ===, !=, <, >, <=, >=

// 4. Logical Operators: && --> AND, || --> OR, ! --> NOT
