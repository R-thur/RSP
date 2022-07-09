'use strict'

// Player
const player = document.getElementById('player');
let playerBtn = document.querySelector('.playerbtn')

let playerSpan = document.getElementById('playerspan')
let playerBtnSpan = document.querySelector('.playerbtnspan');

let playerSelection = 'click';
let playerEndTurn;

// Computer
const computer = document.getElementById('computer');
const computerBtn = document.querySelector('.computerbtn');
const computerBtnSpan = document.querySelector('.computerbtnspan');


// Color, text and value toggler - Player
const switchElement = function (newtext) {
  playerBtnSpan.textContent = newtext;
  playerSelection = newtext;

if (newtext == 'rock') {
  player.className = 'rock'
  playerBtnSpan.className = 'rockspan'
} else if (newtext == 'paper') {
  player.style.border = '3px solid #0ff'
} else if (newtext == 'scissors') {
  player.style.border = '3px solid #0f0'
} else {
  player.style.border = '3px solid white'

}
}

// Main menu transition
player.addEventListener('click', function () {

  computerBtnSpan.textContent = 'ai panel';
  computer.className = 'computerbtn';
  player.className = 'playerbtn_click'
  playerBtnSpan.textContent = 'click me'

  // Rsp Selector                        

  player.addEventListener('click', function () {

    computer.className = 'computer_selecting';
    computerBtnSpan.textContent = 'selecting'

    if (playerBtnSpan.textContent == 'click me') {
      switchElement('rock')
    } else if (playerBtnSpan.textContent == 'rock') {
      switchElement('paper')
    } else if (playerBtnSpan.textContent == 'paper') {
      switchElement('scissors')
    } else {
      switchElement('rock')
    }
  });

});

//                      Game logic

// Computer's 'AI'
function computerRandomizer() {
  const rsp = ["rock", "scissors", "paper"];
  return rsp[Math.trunc(Math.random() * rsp.length)];
}


// Game rules -> Round winner
let playerRoundsWon = 0;
let computerRoundsWon = 0;

const showGlow = function (winner, winnerspan, item) {
winner.className = `${item}2`;
winnerspan.className = `${item}span2`;
};

const calcRoundWinner = function (computerSelection, playerSelection) {
  if (playerSelection == computerSelection) {
    console.log('tie');

  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    showGlow(player, playerBtnSpan, 'rock');
    playerRoundsWon++;
    
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    showGlow(computer, computerBtnSpan, 'rock');
  // } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
  //   computer.className = 'rock2';
  //   computerSpan.className = 'rockspan2';

    // playerBtnSpan.textContent = 'rock'
  }
} 
//     (computerSelection == 'paper' && playerSelection == 'rock') ||
//     (computerSelection == 'scissors' && playerSelection == 'paper')
//    {
//     return console.log('computer wins'), computerRoundsWon++;

//   } else {
//     return console.log('player wins'), playerRoundsWon++;
//   }
// };

// Game winner 
const gameWinner = (computer, player) =>
  computer > player ? console.log(`computer won ${computer} : ${player}`) :
    console.log(`player won ${player} : ${computer}`);

// Right click - game start
player.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  if (playerBtnSpan.textContent == 'rock' ||
  playerBtnSpan.textContent == 'paper' ||
  playerBtnSpan.textContent == 'scissors') {
    if (playerRoundsWon < 3 && computerRoundsWon < 3) {
      playerEndTurn = playerSelection;

    let aiSelection = computerRandomizer();
    console.log(`computer ${aiSelection}`);
    console.log(`player ${playerEndTurn}`);

    computer.textContent = aiSelection;
    calcRoundWinner(aiSelection, playerEndTurn);
    console.log(computerRoundsWon, playerRoundsWon);
      

  // } else {
  //   player.className = 'computerbtn'
  //   playerBtnSpan.textContent = 'end'
  //   document.getElementById('player').style.pointerEvents = 'none';
  }
}
  }
);
