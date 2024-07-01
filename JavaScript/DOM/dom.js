// DOM : Document Object Model

// Accessing elements by Tag Name
console.log('\t\t\t\t\t\\Accessing elements by Tag Name\\');
let heading = document.getElementsByTagName('h1');
console.log(heading);
console.log(heading.length);
for(let i=0; i<heading.length; i++){
    console.log(heading[i].innerHTML);
}

// Accessing elements by Class Name
console.log('\t\t\t\t\t\\Accessing elements by Class Name\\'); 
let classHeading = document.getElementsByClassName('title');
console.log(classHeading);
console.log(classHeading.length);
for(let i=0; i<classHeading.length; i++){
    console.log(classHeading[i].innerHTML);
}

// Accessing elements by Id Name 
console.log('\t\t\t\t\t\\Accessing elements by Id Name\\');
let idHeading = document.getElementById('3-title');
console.log(idHeading);
console.log(idHeading.innerHTML);


// Accessing elements by querySelector
console.log('\t\t\t\t\t\\Accessing elements by querySelector\\'); 
let tagName = document.querySelector('h1');
console.log(tagName);
console.log(tagName.innerHTML);

let className = document.querySelector('.title');
console.log(className);
console.log(className.innerHTML);

const idName = document.querySelector('1-title');
console.log(idName);
console.log(idName.innerHTML);