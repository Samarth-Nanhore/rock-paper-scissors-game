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

let playerScore = 0;
let computerScore = 0;

let playRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    if (playerSelection === "rock") {
      playerScore += 1;
      return "You Win! Rock beat Scissors";
    } else {
      computerScore += 1;
      return "You Lose! Rock beat Scissors";
    }
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    if (playerSelection === "paper") {
      playerScore += 1;
      return "You Win! Paper beat Rocks";
    } else {
      computerScore += 1;
      return " You lose! Paper beat Rocks";
    }
  } else if (
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    if (playerSelection === "scissors") {
      playerScore += 1;
      return "You Win! Scissors beat Paper";
    } else {
      computerScore += 1;
      return "You Lose! Scissors beat Paper";
    }
  } else if (
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    return "It's draw!";
  } else {
    return `Your selection ${playerSelection} is not valid hence no score will consider`;
  }
};

let getSelections = () => {
  let playerSelection = prompt("Rock, Paper, Scissors ?").toLowerCase();
  console.log(`Your selection is ${playerSelection}`);

  let computerSelection = getComputerChoice().toLowerCase();
  console.log(`Computer selection is ${computerSelection}`);

  console.log(playRound(playerSelection, computerSelection));
};

let findWinner = () => {
  if (playerScore > computerScore) {
    console.log(
      `Congratulations! You win the game, Your Score is ${playerScore} and Computer Score is ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `Computer win the Game, Your Score is ${playerScore} and Computer Score is ${computerScore}`
    );
  } else if (computerScore === playerScore) {
    console.log(
      `It's draw! your score is ${playerScore} and computer score is ${computerScore} `
    );
  } else {
    console.log(
      `Hence the every selection are not valid, your score is ${playerScore} and computer score is ${computerScore}`
    );
  }
};

// let game = () => {
//   for (let i = 1; i <= 5; i++) {
//     console.log(`This is round ${i}`);
//     getSelections();
//   }
//   findWinner();
// };

// console.log(game());
