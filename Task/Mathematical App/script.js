const expressionContainer = document.getElementById('expression-container');
const userAnswerInput = document.getElementById('user-answer');
const submitBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh-btn');
const resultContainer = document.getElementById('result-container');
const resultPara = document.getElementById('result');

let currentExpression = '';
let correctAnswer = 0;

function generateExpression() {
  const num1 = Math.floor(Math.random() * 10) * 186;
  const num2 = Math.floor(Math.random() * 10) * 89;
  const operator = Math.random() < 0.5 ? '+' : '-';
  currentExpression = `${num1} ${operator} ${num2}`;
  correctAnswer = operator === '+'? num1 + num2 : num1 - num2;
  expressionContainer.innerHTML = `<p id="expression">${currentExpression}</p>`;
}

generateExpression();

submitBtn.addEventListener('click', () => {
  const userAnswer = parseInt(userAnswerInput.value);
  if (userAnswer === correctAnswer) {
    resultPara.textContent = 'Correct 🎉!!!';
    resultPara.style.color = 'green';
  } 
  else {
    resultPara.textContent = `Incorrect!!! The correct answer is ${correctAnswer}!`;
    resultPara.style.color = 'red';
  }
});

refreshBtn.addEventListener('click', () => {
  generateExpression();
  userAnswerInput.value = '';
  resultPara.textContent = '';
});