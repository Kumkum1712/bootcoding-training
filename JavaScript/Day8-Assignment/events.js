let headings = document.querySelectorAll("h2");
let btn = document.querySelector("button");

btn.addEventListener('click', () => {
    setTimeout(() => {
        headings[0].style.color = "red";
        setTimeout(() => {
            headings[1].style.color = "blue";
            setTimeout(() => {
                headings[2].style.color = "green";
            }, 2000);
        }, 3000);
    },4000);
}); 

function clickMe(){
    alert("Hey,why did you clicked me ???");
}