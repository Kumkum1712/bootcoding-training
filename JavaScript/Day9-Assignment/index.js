// 1 --> 
let p = document.querySelector('p');
console.log(`By querySelector(tagname)`);
console.log(p.innerHTML);
console.log('');


let tagName = document.getElementsByTagName('p');
console.log(`By tag name`);
console.log(p.innerHTML);
console.log('');


// 2 --> 
console.log(`By querySelector(#id)`);
let id1 = document.querySelector('#para-1');
console.log(id1.innerHTML);
let id2 = document.querySelector('#para-2');
console.log(id2.innerHTML);
let id3 = document.querySelector('#para-3');
console.log(id3.innerHTML);
let id4 = document.querySelector('#para-4');
console.log(id4.innerHTML);
console.log('');


console.log(`By id`);
let idName = document.getElementById('para-1');
console.log(idName.innerHTML);
idName = document.getElementById('para-2');
console.log(idName.innerHTML);
idName = document.getElementById('para-3');
console.log(idName.innerHTML);
idName = document.getElementById('para-4');
console.log(idName.innerHTML);
console.log('');


// 3 -->
let paras = document.querySelectorAll('p');
for(let i=0; i<paras.length; i++){
    console.log(paras[i].innerHTML);
}
console.log('');

let tags = document.getElementsByTagName('p');
for(let i=0; i<tags.length; i++){
    console.log(tags[i].innerHTML);
}
console.log('');


// 4 --> 
paras = document.getElementsByTagName('p');
for(let i=0; i<paras.length; i++){
    console.log(paras[i].textContent);
}
console.log('');


// 5 -->
let content = document.getElementById('para-4');
content.textContent = "Fourth Paragraph";


// 6 -->
setTimeout(() => {
    console.log("Time - Out")
}, 5000);