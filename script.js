let selectionBtnElements = document
  .querySelector(".selection-btn")
  .querySelectorAll("div");

let gameCountElementText = document.querySelector(".counter");

let playerScoreElementText = document
  .querySelector(".score-container")
  .querySelector(".player")
  .querySelector(".player-score");

let computerScoreElementText = document
  .querySelector(".score-container")
  .querySelector(".computer")
  .querySelector(".computer-score");

let gameResultElementText = document
  .querySelector(".result-container")
  .querySelector(".game-result");

let getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
};

selectionBtnElements.forEach((btn) => {
  btn.addEventListener("click", () => {
    let btnTextContext = btn.textContent;
  });
});
