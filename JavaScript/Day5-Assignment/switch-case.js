// If-else ladder
let score = prompt("Enter you score : ");

if(score>79 && score<101){
    console.log(`You got ${score}! You are in grade \'A\'`);
}
else if(score>69 && score<90){
    console.log(`You got ${score}! You are in grade \'B\'`);
}
else if(score>59 && score<70){
    console.log(`You got ${score}! You are in grade \'C\'`);
}
else if(score>49 && score<60){
    console.log(`You got ${score}! You are in grade \'D\'`);
}
else if(score>0 && score<50){
    console.log(`You got ${score}! You are fail in this examination.'`);
}
else{
    console.log("Please enter valid score!!!");
}
