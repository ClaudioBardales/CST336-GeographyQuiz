const Btn = document.querySelector("button");

Btn.addEventListener("click", gradeQuiz);

function isFormValid() {
  let isValid = true;
  let q1Response = document.querySelector("#q1").value;
  let validationFdbk = document.querySelector("#validationFdbk");

  if (q1Response === "") {
    isValid = false;
    validationFdbk.textContent = "Question 1 wasen't answered";
  }
  return isValid;
}

function gradeQuiz() {
  document.querySelector("#validationFdbk").textContent = "";

  if (!isFormValid()) {
    return;
  }

  let score = 0;
  let q1Response = document.querySelector("#q1").value.toLowerCase();
  let q1Feedback = document.querySelector("#q1Feedback");
  let markImg1 = document.querySelector("#markImg1");

  q1Feedback.textContent = "";
  q1Feedback.className = "";
  markImg1.textContent = "";

  if (q1Response === "sacramento") {
    q1Feedback.textContent = "Correct!";
    q1Feedback.className = "bg-success text-white";

    let img = document.createElement("img");
    img.src = "img/checkmark.png";
    img.alt = "Checkmark";
    markImg1.appendChild(img);

    score += 20;
  } else {
    q1Feedback.textContent = "Incorrect!";
    q1Feedback.className = "bg-warning text-white";

    let img = document.createElement("img");
    img.src = "img/xmark.png";
    img.alt = "X mark";
    markImg1.appendChild(img);
  }

  score = 0;

  let q2Response = document.querySelector("#q2").value;

  if (q1Response === "sacramento") {
    rightAnswer(1);
  } else {
    wrongAnswer(1);
  }

  if (q2Response === "mo") {
    rightAnswer(2);
  } else {
    wrongAnswer(2);
  }

  if (
    document.querySelector("#Jefferson").checked &&
    document.querySelector("#Roosevelt").checked &&
    !document.querySelector("#Jackson").checked &&
    !document.querySelector("#Franklin").checked
  ) {
    rightAnswer(3);
  } else {
    wrongAnswer(3);
  }

  let selectedQ4 = document.querySelector("input[name=q4]:checked");

  if (selectedQ4 !== null && selectedQ4.value === "Rhode Island") {
    rightAnswer(4);
  } else {
    wrongAnswer(4);
  }

  let q5Response = document.querySelector("#q5").value.trim.toLowerCase();

  if (q5Response.includes("grand canyon")) {
    rightAnswer(5);
  } else {
    wrongAnswer(5);
  }

  let selectedQ6 = document.querySelector("input[name=q6]:checked");

  if (selectedQ6 !== null && selectedQ6.value === "Alaska") {
    rightAnswer(6);
  } else {
    wrongAnswer(6);
  }

  let pacificStates = [];

  if (document.querySelector("#CaliforniaPacific").checked) {
    pacificStates.push("California");
  }

  if (document.querySelector("#OregonPacific").checked) {
    pacificStates.push("Oregon");
  }

  if (document.querySelector("#TexasPacific").checked) {
    pacificStates.push("Texas");
  }

  if (document.querySelector("#NevadaPacific").checked) {
    pacificStates.push("Nevada");
  }

  pacificStates.sort();

  if (
    pacificStates.length === 2 &&
    pacificStates.includes("California") &&
    pacificStates.includes("Oregon")
  ) {
    rightAnswer(7);
  } else {
    wrongAnswer(7);
  }

  let q8Response = document.querySelector("#q8").value;

  if (q8Response === "Denver") {
    rightAnswer(8);
  } else {
    wrongAnswer(8);
  }

  let q9Response = document.querySelector("#q9").value;

  if (q9Response === "50") {
    rightAnswer(9);
  } else {
    wrongAnswer(9);
  }

  let q10Response = document.querySelector("#q10").value;

  if (q10Response === "1776-07-04") {
    rightAnswer(10);
  } else {
    wrongAnswer(10);
  }

  document.querySelector("#totalScore").textContent = `Total Score: ${score} / 100`;

const totalScore = document.querySelector("#totalScore");

if (score > 80){
  totalScore.className = "text-success";
  document.querySelector("#congrats").textContent = "Congratulation! Good Work!";
} else {
  totalScore.className = "text-danger";
  document.querySelector("#congrats").textContent = "";
}

let attempts = Number(localStorage.getItem("total_attempts")) || 0;

attempts++;

localStorage.setItem("total_attempts", attempts)

document.querySelector("#totalAttempts").textContent = `Total Attempts: ${attempts}`;
  
}

let score = 0;

function setMarkImage(index, imageName, altText) {
  let markContainer = document.querySelector(`#markImg${index}`);
  markContainer.textContent = "";

  let img = document.createElement("img");
  img.src = `img/${imageName}`;
  img.alt = altText;
  markContainer.appendChild(img);
}

function rightAnswer(index) {
  let feedback = document.querySelector(`#q${index}Feedback`);
  feedback.textContent = "Correct!";
  feedback.className = "bg-success text-white";
  setMarkImage(index, "checkmark.png", "Checkmark");
  score += 10;
}

function wrongAnswer(index) {
  let feedback = document.querySelector(`#q${index}Feedback`);
  feedback.textContent = "Incorrect!";
  feedback.className = "bg-warning text-white";
  setMarkImage(index, "xmark.png", "X mark");
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function displayQ4Choices() {
  let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
  shuffleArray(q4ChoicesArray);

  let choicesContainer = document.querySelector("#q4Choices");
  choicesContainer.textContent = "";

  for (let choice of q4ChoicesArray) {
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "q4";
    input.id = choice;
    input.value = choice;

    let label = document.createElement("label");
    label.htmlFor = choice;
    label.textContent = choice;

    choicesContainer.appendChild(input);
    choicesContainer.appendChild(label);
    choicesContainer.appendChild(document.createTextNode(" "));
  }
}

let attempts =
  Number(localStorage.getItem("total_attempts")) || 0;

document.querySelector("#totalAttempts").textContent =
  `Total Attempts: ${attempts}`;

displayQ4Choices();
