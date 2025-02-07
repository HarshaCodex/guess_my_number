"use strict";

let number = generateRandomNumber();
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", checkGuess);

document.querySelector(".again").addEventListener("click", resetGame);

function checkGuess() {
    const guess = Number(document.querySelector(".guess").value);
  
    if (!guess) {
      displayMessage("⛔️ No number!");
    } else if (guess === number) {
      correctGuess();
    } else {
      guess > number
        ? changeMessage("📈 Too High!")
        : changeMessage("📉 Too Low!");
    }
  }

function resetGame() {
  score = 20;
  number = generateRandomNumber();

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
}

function changeMessage(message) {
  if (score > 1) {
    displayMessage(message);
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("You lost!");
    document.querySelector(".score").textContent = 0;
  }
}

function correctGuess() {
  displayMessage("🎉 Correct Number!");
  document.querySelector(".number").textContent = number;

  document.querySelector("body").style.backgroundColor = "#60b347";

  document.querySelector(".number").style.width = "30rem";
  if (highScore < score) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

