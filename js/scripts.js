const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result;
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    result = "YOU WIN!";
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result = "YOU WIN!";
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result = "YOU WIN!";
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else {
    result = "YOU LOSE!";
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenTXT", "redTXT");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenTXT");
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redTXT");
      break;
  }
}
