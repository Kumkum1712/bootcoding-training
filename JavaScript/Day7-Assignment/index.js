// 1. Create an index.html file and put four p elements. Get the first paragraph by using document.querySelector(tagname) and tag name.
let tagName1 = document.querySelector('p');
console.log(tagName1);
console.log(tagName1.innerHTML);

let tagName2 = document.getElementsByTagName('p');
console.log(tagName2);
for(let i=0; i<tagName2.length; i++){
    console.log(tagName2[i].innerHTML)
}


// 2. Get each of the paragraph using document.querySelector('#id') and by their id.
let idName1 = document.querySelector('#second-para');
console.log(idName1);
console.log(idName1.innerHTML);

let idName2 = document.getElementById('third-para');
console.log(idName2);
console.log(idName2.innerHTML);


// 3. Declae afunction name printArray. It takes aray as a parameter and it prints out each value of the array. Create by using Function Declaration, Function Expression, Arrow Function
// Function Declaration 
console.log('Function by Function Declaration');
function printArray(array){
    array.forEach(element => {
        console.log(element);
    });
}
let arr1 = ['Nagpur','Mumbai','Pune','Manali'];
printArray(arr1);

// Function Expression
console.log('Function by Function Expression');
let arr2 = function(array){
    array.forEach(element => {
        console.log(element);
    });
}
arr2 = ['Orange','Mango','Pineapple','Apple'];
console.log(arr2);

// Arrow Function 
console.log('Function by Arrow Function');
let arr3 = (array) => {
    array.forEach(element => {
        console.log(element);
    });
}
arr3 = ['Rose','Mogra','Lotus','Hibiscus'];
console.log(arr3);


// 4. Declare a fuction name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range
function sumOfOdds(num1){
    let odd = 0;
    for(let i=0; i<=num1; i++){
        if(i % 2 == 1){
            odd = odd + i;
        }
    }
    console.log(`Sum of Odd numbers from 0-${num1} is ${odd}`);
}
let input1 = prompt('Enter a number for sum of odd numbers: ');
let num1 = parseInt(input1);
sumOfOdds(num1);


// 5. Declare a fuction name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range
function sumOfEven(num2){
    let even = 0;
    for(let i=0; i<=num2; i++){
        if(i % 2 == 0){
            even = even + i;
        }
    }
    console.log(`Sum of Even numbers from 0-${num2} is ${even}`);
}
let input2 = prompt('Enter a number for sum of even numbers: ');
let num2 = parseInt(input2);
sumOfEven(num2);


// 6. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item (HINT: Use Continue Keyword).
function removeItem(index){
    for(let i=0; i<arr.length; i++){
        if(index==i){
            arr.shift(index);
        }
        console.log(arr[i]);
        continue;
    }
}
let arr = ['apple','mango','orange','strawberry','cherry','watermellon'];
console.log(`Your initial array is ${arr}`);
let userInput = prompt('Enter a index (0-5) to remove the item : ');
let index = parseInt(userInput);
console.log(`Your array after removing the item: `);
removeItem(index);