// Use of querrySelectorAll 
// for Tags 
console.log(`querySelectoAll for Tags`);
let tag = document.querySelectorAll("h1");
console.log(tag.length);
console.log(tag);
console.log(tag[1].innerHTML);

for(let i=0; i < tag.length; i++){
    console.log(tag[i].innerHTML)
}


// for Class 
console.log(`querySelectoAll for Class`);
let paras = document.querySelectorAll(".para");
console.log(paras.length);
console.log(paras);
console.log(paras[1].innerHTML);

for(let i=0; i < paras.length; i++){
    console.log(paras[i].innerHTML)
}


// for Ids
console.log(`querySelectoAll for Ids`);
let ids = document.querySelectorAll("#one");
console.log(ids.length);
console.log(ids);
console.log(ids[1].innerHTML);

for(let i=0; i < ids.length; i++){
    console.log(ids[i].innerHTML)
}


// Adding class to elements 
let h2Heading = document.querySelector("h2");
h2Heading.className = "ABC";
h2Heading.id = "xyz";
console.log(h2Heading);

// Adding multiple classes and removing them 
h2Heading.classList.add("ABC","pqr","ghi");
h2Heading.classList.remove("pqr","ghi");
console.log(h2Heading);


// Styling with JS 
h2Heading.textContent = "Hello Web Developers";
h2Heading.style.color = "red";
h2Heading.style.fontSize = "45px";
h2Heading.style.backgroundColor = "yellow";


// Creating Lists by JS 
let ul = document.querySelector("ul");
lists = `
<li>Vacations is for peace</li>
<li>Culture creates learning Environment</li>
<li>Good Government needs Good Governence</li>
<li>Eat an apple a day, keeps doctor away</li>
`;
ul.innerHTML = lists;


// Creating Element/Tags by JS 
let divBody = document.createElement("div");
let divText = document.createTextNode("I am newly created div in JS file");

divBody.appendChild(divText);
console.log(divBody);
document.body.appendChild(divBody);
divBody.style.color = "white";
divBody.style.backgroundColor = "black";
divBody.style.padding = "10px 10px";
divBody.style.width = "300px";


// Set TImeout 
function boilMilk(time){
    console.log("Milk is started boiling");
    setTimeout(() => {
        console.log("Milk has been boiled");
    }, time);
}
boilMilk(5000);         //1000 = 1 second 