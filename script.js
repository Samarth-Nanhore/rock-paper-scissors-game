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

let gameEndResultElement = document
  .querySelector(".result-container")
  .querySelector(".end-result");

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

let gameCount = 0;

selectionBtnElements.forEach((btn) => {
  btn.addEventListener("click", () => {
    let playerSelection = btn.textContent.toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    return game(playerSelection, computerSelection);
  });
});

let playerScore = 0;
let computerScore = 0;

let game = (playerSelection, computerSelection) => {
  gameCount += 1;
  gameCountElementText.textContent = `This is game ${gameCount}`;
  if (gameCount >= 6) {
    gameCountElementText.textContent = `Refresh to restart the game`;
    gameResultElementText.textContent = `End`;
    findWinner();
  } else {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      if (playerSelection === "rock") {
        playerScoreElementText.textContent = ` ${(playerScore += 1)}`;
        gameResultElementText.textContent = "You Win! Rock beat Scissors";
      } else {
        computerScoreElementText.textContent = `${(computerScore += 1)}`;
        gameResultElementText.textContent = "You Lose! Rock beat Scissors";
      }
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      if (playerSelection === "paper") {
        playerScoreElementText.textContent = ` ${(playerScore += 1)}`;
        gameResultElementText.textContent = "You Win! Paper beat Rocks";
      } else {
        computerScoreElementText.textContent = `${(computerScore += 1)}`;
        gameResultElementText.textContent = " You lose! Paper beat Rocks";
      }
    } else if (
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      if (playerSelection === "scissors") {
        playerScoreElementText.textContent = `${(playerScore += 1)}`;
        gameResultElementText.textContent = "You Win! Scissors beat Paper";
      } else {
        computerScoreElementText.textContent = `${(computerScore += 1)}`;
        gameResultElementText.textContent = "You Lose! Scissors beat Paper";
      }
    } else if (
      (playerSelection === "paper" && computerSelection === "paper") ||
      (playerSelection === "rock" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "scissors")
    ) {
      gameResultElementText.textContent = "It's draw!";
    } else {
      gameResultElementText.textContent = `Your selection ${playerSelection} is not valid hence no score will consider`;
    }
  }
};

let findWinner = () => {
  if (playerScore > computerScore) {
    gameEndResultElement.textContent = `Congratulations! You win the game`;
  } else if (computerScore > playerScore) {
    gameEndResultElement.textContent = `Computer win the Game`;
  } else if (computerScore === playerScore) {
    gameEndResultElement.textContent = `It's draw! `;
  } else {
    gameEndResultElement.textContent = `Hence the every selection are not valid`;
  }
};
