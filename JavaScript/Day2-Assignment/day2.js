 console.log("Welcome to JavaScript world!");

//  Keywords let, const, var
// var name= "Kumkum";

let myName= "Kumkum";
let name= myName;
console.log(name);

name="kuku";
console.log(name)

const num=5;
console.log(num);


// Concatenation

let fName = `Kumkum`;
let lName = 'Hawelikar';
let address = "Ring Road";
let city = "Nagpur";
let country = "India";
let age = 18;
let gender = "female";

console.log("My name is " + fName + " " + lName + "." + "I live in " + address + "," + city + "," + country + "." + "My age is " + age + "." + "My gender is " + gender + ".");

// Template Literals

let myInfo = `My name is ${fName} ${lName}. I live in ${address}, ${city}, ${country}. My age is ${age}. My gender is ${gender}.`;
console.log(myInfo);



// Primitive Datatype

let firstName = "KUKU"; //string
console.log("Datatype :" + typeof(firstName));

let number = 17; //number
console.log("Datatype :" + typeof(number));

let isRaining = false; //boolean
console.log("Datatype :" + typeof(isRaining));

let NullVariable = null; //Null --> Object
console.log("Datatype :" + typeof(NullVariable));

let noValue; //undefined
console.log("Datatype :" + typeof(noValue));


// Non-Primitive Datatypes
// Array
let arrayCar = ["Thar, Scorpio, Hyundai"];
console.log(`The car array is ${arrayCar}`);

// Object --> Key : Value
let college = {
    name : "GPG",
    city : "Gondia",
    nation : "India",
    course : "IT"
};
console.log(college);
console.log("Datatype of college :" + typeof{college})