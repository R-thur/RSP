"use stirct";

function computerRandomizer() {
  // Computer 'AI'
  const rsp = ["rock", "scissors", "paper"];
  return rsp[Math.trunc(Math.random() * rsp.length)];
}

const calcRoundWinner = function (computerSelection, playerSelection) {
  // Game logic

  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return "ai";
  } else {
    return "player";
  }
};

const gameWinner = (computer, player1) =>
  computer > player1 ? console.log("computer won") : console.log("player won"); // Game Winner

function gameLog(aiSelection, playerChoice) {
  // Game Log
  if (calcRoundWinner(aiSelection, playerChoice) == "tie") {
    return console.log(`tie ai ${aiSelection} vs player ${playerChoice}`), n++;
  } else if (calcRoundWinner(aiSelection, playerChoice) === "ai") {
    return (
      console.log(`computer won, ${aiSelection} beats ${playerChoice}`), ai++
    );
  } else if (calcRoundWinner(aiSelection, playerChoice) === "player") {
    return (
      console.log(`player won ${playerChoice} beats ${aiSelection}`), player++
    );
  }
}

let ai = 0;
let player = 0;
n = 5;

outro: for (let i = 0; i < n; i++) {
  // Best of five
  const playerInput = prompt("Rock? Scissors? Paper?", "paper");
  const playerChoice = playerInput.toLocaleLowerCase();

  let aiSelection = computerRandomizer();

  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    calcRoundWinner(aiSelection, playerChoice);
    gameLog(aiSelection, playerChoice);
  } else if (null ?? undefined) {
    break;
  } else {
    alert("wrong value"), n++;
  }
}

console.log(`ai ${ai} : player ${player}. Rounds played ${n}`);

console.log(gameWinner(ai, player));

// console.log(calcRoundWinner('rock', 'scissors'))
