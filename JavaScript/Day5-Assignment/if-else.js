// If-else Conditional
let myAge = 18;
let yourAge = prompt("Enter your age only: ");
let age = parseInt(yourAge);

console.log(`Thank you for entering your age. I am 18 yrs old.`)

if(myAge > age){
    console.log(`I am older than you by ${myAge - age} years!`);
} else{
    console.log(`You are older then me by ${age - myAge} years!`);
}