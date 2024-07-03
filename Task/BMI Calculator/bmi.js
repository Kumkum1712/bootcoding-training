const mass = document.querySelector("#mass");
const height = document.querySelector("#height");
const button = document.querySelector(".btn");
const result = document.querySelector("#result");

// BMI FORMULA : BMI = mass (kg) / (height (cm) / 100)**²
let bmi;
let bmiResult;
button.addEventListener("click", () => {
  bmi = mass.value / (height.value / 100) ** 2;
  result.textContent = bmi.toFixed(2);
  console.log(bmi);
  bmiResult = bmi.toFixed(2);

  // UnderWeight <18.5
  if (bmiResult <= 18.5) {
    let noteDiv = document.createElement("h3");
    let noteText = document.createTextNode(
      `NOTE : Hey! Your BMI is ${bmiResult} and comes under Underweight Category. `
    );
    noteDiv.appendChild(noteText);
    document.body.appendChild(noteDiv);
    noteDiv.style.color = "red";
    noteDiv.style.textAlign = "center";
  }
  // Healthy 18.5 to 24.9
  else if (bmiResult >= 18.5 && bmi <= 24.9) {
    let noteDiv = document.createElement("h3");
    let noteText = document.createTextNode(
      `NOTE : Hey! Your are BMI is ${bmiResult} and comes under Healthy Category. `
    );
    noteDiv.appendChild(noteText);
    document.body.appendChild(noteDiv);
    noteDiv.style.color = "red";
    noteDiv.style.textAlign = "center";
  }

  // Overweight 25 to 29.9
  else if (bmiResult >= 25 && bmiResult <= 29.9) {
    let noteDiv = document.createElement("h3");
    let noteText = document.createTextNode(
      `NOTE : Hey! Your are BMI is ${bmiResult} and comes under Overweight Category. `
    );
    noteDiv.appendChild(noteText);
    document.body.appendChild(noteDiv);
    noteDiv.style.color = "red";
    noteDiv.style.textAlign = "center";
  }

  // Obesity bmi > 30
  else if (bmiResult >= 30) {
    let noteDiv = document.createElement("h3");
    let noteText = document.createTextNode(
      `NOTE : Hey! Your are BMI is ${bmiResult} and comes under Obesity Category. `
    );
    noteDiv.appendChild(noteText);
    document.body.appendChild(noteDiv);
    noteDiv.style.color = "red";
    noteDiv.style.textAlign = "center";
  }
});