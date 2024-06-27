// User Input by Prompt 
let userName = prompt("Enter your name : ");
let userAge = prompt("Enter your age :");
let age = parseInt(userAge);
console.log(`My name is ${userName}`);
console.log(`My age is ${age}`);




// TOPIC --> Conditional
// 1. If-else condition
let userNum = prompt("Enter a number : ");
let num1 = parseInt(userNum);
if(num1 > 0){
    console.log("Entered number is positive");
}
else{
    console.log("Entered number is negative"); 
}

// 2. Nested if-else condition
let num = prompt("Enter a number : ");
let convertNum = parseInt(num);
if(convertNum > 0){
    console.log(`Number is positive`);
}
else if(convertNum < 0){
    console.log(`Number is negative`);
}
else{
    console.log(`It is zero`)
}

// 3. Ternary Operator 
let ternary = prompt("Enter a number : ");
let convertToInt = parseInt(ternary);
(convertToInt > 0) ? console.log("Number is positive") : console.log("Number is negative");




// TOPIC --> Switch Cases 
let whether = prompt("What's the weather today ?");
switch(whether){
    case 'summer':
        console.log("It is very hot. Take care of your skin.");
        break;
    case 'rainy':
        console.log("Is it raining outside. Please keep the raincoat or umbrella with you.");
        break;
    case 'winter':
        console.log("It's cold outside. Don't forget to wear the jacket.");
        break;
    default:
        console.log("Don't forget to switched off the lights while you are going outside the house.");
}









there is one url which has 3 part in it . first part shows the expression and in second part user enter the answer for that expression. if it is correct then correct msg will be popped up and if the answer will be wrong the correct answer will be showns on the screen . and in third part there will be two buttons one is submit which will work when user click the submit button and one is refresh button ,when user click the refresh button the expression will also refresh every time.

write the code of this using HTML, JS and CSS