// Pre-increment by 3
let userInput = prompt("Enter a number here: ");
let num = parseInt(userInput);
console.log(`You have enterd ${num}`);
num += ++num + ++num;
console.log(`Your number after pre-increment by 3 is ${num}`);



// Post-decrement by 2
let num2 = 10;
console.log(`Value of the number is ${num2}`);
num2 -= num2-- - num2--;
console.log(`The number after post-decrement by 2 is ${num2}`);