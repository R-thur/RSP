'use strict'

////////////////////////////////// Interface

let element = document.getElementById('new');
let computer = document.getElementById('compspan');
let playerSelection = 'new';
let playerEndTurn;

// Class and value toggler - Player
let switchElement = function (newtext) {
  document.getElementById('new').textContent = newtext;
  // element.className = value;
  playerSelection = newtext;
}
// Class and value toggler - Computer



let testing = document.querySelector(".secondary");
let secspan = document.querySelector('.secspan')
testing.style.setProperty("--check-secondary", 0); // off glowing edges

const switchGLowEffect = function (zeroone, color) {  // Toggle Glowing
  testing.style.setProperty("--check-secondary", zeroone);
  secspan.style.color = color;
}

// RPS Selector
document.getElementById('test').addEventListener('click', function () {
  switchGLowEffect(1, 'white')

  computer.textContent = 'SELECTING'


  if (element.textContent == 'PLAY') {
    switchElement('Rock')
    // document.querySelector('.computer').style.opacity = 0;
    document.querySelector('.secondary').style.color = 'white';


  } else if (element.textContent == 'Rock') {
    switchElement('Paper')


  } else if (element.textContent == 'Paper') {
    switchElement('Scissors')


  } else {
    document.getElementById('new').textContent = 'Rock';
    switchElement('Rock')
  }
});

/////////////////////////// Game logic

// Computer's 'AI'
function computerRandomizer() {
  const rsp = ["Rock", "Scissors", "Paper"];
  return rsp[Math.trunc(Math.random() * rsp.length)];
}


// Game rules -> Round winner
let playerRoundsWon = 0;
let computerRoundsWon = 0;

const calcRoundWinner = function (computerSelection, playerSelection) {
  if (playerSelection == computerSelection) {
    return console.log('tie');

  } else if (
    (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
    (computerSelection == 'Paper' && playerSelection == 'Rock') ||
    (computerSelection == 'Scissors' && playerSelection == 'Paper')
  ) {
    return console.log('computer wins'), computerRoundsWon++;

  } else {
    return console.log('player wins'), playerRoundsWon++;
  }
};

// Game winner
const gameWinner = (computer, player) =>
  computer > player ? console.log(`computer won ${computer} : ${player}`) :
    console.log(`player won ${player} : ${computer}`);


let aiSelection = computerRandomizer();


element.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  playerEndTurn = playerSelection;

  let aiSelection = computerRandomizer();
  console.log(`computer ${aiSelection}`);
  console.log(`player ${playerEndTurn}`);

  computer.textContent = aiSelection;

  calcRoundWinner(aiSelection, playerEndTurn);
  console.log(computerRoundsWon, playerRoundsWon);

  if (playerRoundsWon == 2 || computerRoundsWon == 2) {

    element.textContent = 'GAME OVER'
    computer.textContent = 'GAME OVER'
    gameWinner(computerRoundsWon, playerRoundsWon)

    //  }
  }
}
);


