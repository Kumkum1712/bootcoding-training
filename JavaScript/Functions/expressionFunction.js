// Expression function 
console.log('Expression Function');
let areaOfCircle = function(r){
    let result = Math.PI * r * r;
    return result;
};
console.log(`Area of Circle = ${areaOfCircle(3)}`);


// Arrow function 
console.log('Arrow Function');
let areaOfSquare = n =>{
    let result = n * n;
    return result;
}
console.log(`Area of Squar = ${areaOfSquare(4)}`);


// Default parameter 
console.log('Default parameter');
function areaOfRectangle(length=10, breadth=4){
    return length * breadth;
}
console.log(`Area of Rectangle: ${areaOfRectangle()}`);