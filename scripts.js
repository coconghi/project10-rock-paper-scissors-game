/* Algorithm
When we click a button:
1. Computer randomly selects a move
2. Compare the moves to get the result
3. Display the result in a popup */

let score = JSON.parse(localStorage.getItem("scores")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();

// compare the moves to get results + show results
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "rock") {
    //rock
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  } else if (playerMove === "scissors") {
    //paper
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    //scissors
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("scores", JSON.stringify(score));

  // DOM
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  showResult(playerMove, computerMove);
}

//   DOM
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}; Losses: ${score.losses}; Ties: ${score.ties}`;
}

function showResult(playerMove, computerMove) {
  document.querySelector(
    ".js-moves-you"
  ).innerHTML = `You <img src="./images/${playerMove}-emoji.png" alt="${playerMove}">`;
  document.querySelector(
    ".js-moves-computer"
  ).innerHTML = `<img src="./images/${computerMove}-emoji.png" alt="${computerMove}"> Computer`;
}

// computer randomly selects a move
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
