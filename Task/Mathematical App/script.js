const expressionContainer = document.getElementById('expression-container');
const userAnswerInput = document.getElementById('user-answer');
const submitBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh-btn');
const resultContainer = document.getElementById('result-container');
const resultPara = document.getElementById('result');

let currentExpression = '';
let correctAnswer = 0;
const operators = ['+','-','*','/'];

function generateExpression() {
  let num1, num2;
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  if(operator === '+'){
    num1 = Math.floor(Math.random() * 10) * 87;
    num2 = Math.floor(Math.random() * 10) * 67;
    currentExpression = `${num1} + ${num2}`;
    correctAnswer = num1 + num2;
  }
  else if(operator === '-'){
    num1 = Math.floor(Math.random() * 10) * 78;
    num2 = Math.floor(Math.random() * 10) * 67;
    currentExpression = `${num1} - ${num2}`;
    correctAnswer = num1 - num2;
  }
  else if(operator === '*'){
    num1 = Math.floor(Math.random() * 10) * 8;
    num2 = Math.floor(Math.random() * 10) * 9;
    currentExpression = `${num1} * ${num2}`;
    correctAnswer = num1 * num2;
  }
  else if(operator === '/'){
    num1 = Math.floor(Math.random() * 10) * 7;
    num2 = Math.floor(Math.random() * 10) * 6;
    while(num1 % num2 !== 0){
      num1 = Math.floor(Math.random() * 10) + 2;
      num2 = Math.floor(Math.random() * 10) + 2;
    }
    currentExpression = `${num1} / ${num2}`;
    correctAnswer = num1 / num2;
  }
  expressionContainer.innerHTML = `<p id="expression"> ${currentExpression}</p>`
}

generateExpression();

submitBtn.addEventListener('click', () => {
  const userAnswer = parseInt(userAnswerInput.value);
  if (userAnswer === correctAnswer) {
    resultPara.textContent = 'Correct!!!';
    resultPara.style.color = 'green';
  } 
  else {
    resultPara.textContent = `Incorrect!!! Try Again.`;
    resultPara.style.color = 'red';
  }
});

refreshBtn.addEventListener('click', () => {
  generateExpression();
  userAnswerInput.value = '';
  resultPara.textContent = '';
});