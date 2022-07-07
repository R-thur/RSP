"use strict";

// Player's button
const player = document.getElementById("player");
const playerbtn = document.querySelector(".playerbtn");
const playerbtnspan = document.querySelector(".playerbtnspan");
//Computer's button
const computer = document.getElementById("computer");
const computerbtn = document.querySelector(".computerbtn.hidden");
const computerbtnspan = document.querySelector(".computerbtnspan.hidden");
// const preloader = document.querySelectorAll(".preloader");

// const test = ["S", "E", "L", "E", "C", "T", "I", "N", "G"];

// let selecting = function () {
//   for (let i = 0; i < test.length; i++) {
//     console.log(test[i]);
//     list.textContent = test[i];
//   }
// };

// document.querySelector(".playerbtnspan").addEventListener("click", function () {
//   player.className = "rock";
//   player.className = "rockspan";
//   computerbtn.className = "computerbtn";
//   computerbtnspan.className = "computerbtnspan";
// });

document.getElementById("player").addEventListener("click", function () {
  playerbtn.className = "playerbtn2";
  playerbtn.textContent = "click me";
  // playerbtnspan.className = "rock";
  computerbtn.className = "computerbtn";
  computerbtnspan.className = "computerbtnspan";
  // computerbtnspan.textContent = "";
  // document.querySelector(".playerbtnspan")
  document.querySelector(".playerbtn2").addEventListener("click", function () {
    computerbtn.className = "computerbtn2";
    computerbtn.textContent = "Selecting";
  });
});

// document.querySelector(".computerbtn").addEventListener("click", selecting);
// let preloader = document.querySelector(".preloader");
// let list = document.querySelectorAll(".list");
// list.textContent = "hi";

// const test = ["S", "E", "L", "E", "C", "T", "I", "N", "G"];

// let container = document.querySelector(".preloader");
// let children = container.childNodes;

// let j = 1;
// function testing() {
//   for (let i = 0; i < test.length; i++) {
//     children[j].textContent = test[i];
//     j = j + 2;
//     console.log(j);
//   }
// }

// player.addEventListener("contextmenu", function () {
//   alert("1");
//   const newDiv = document.createElement("container");
//   testing();
// });
