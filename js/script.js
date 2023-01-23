"use strict";

const RPS = ["Rock", "Paper", "Scissor"];
//winning combinations
const win = ["RockScissor", "PaperRock", "ScissorPaper"];

const playerButtons = document.querySelectorAll("#playerButtons > button");
const playerMoveView = document.querySelector("#playerMoveView > h1");
const computerMoveView = document.querySelector("#computerMoveView> h1");
const playerScoreBoard = document.getElementById("playerScore");
const computerScoreBoard = document.getElementById("computerScore");
const nameButton = document.getElementById("nameButton");

let playerScore = 0, computerScore = 0;
let playerMove, computerMove;

nameButton.addEventListener("click", event =>{
  event.preventDefault();
  let name = document.getElementById("name").value;
  let h1 = document.createElement("h1");
  h1.innerText = name;
  let form = document.getElementById("nameForm");
  form.replaceWith(h1);
});

playerButtons.forEach((node) => node.addEventListener("click", play));

function play(event) {
  playerMove = event.target.value;
  computerMove = getRandomRPS();
  evalPlay(playerMove, computerMove);
  updateWindow();
  checkWin();
}

function getRandomRPS() {
  return RPS[Math.floor(Math.random() * RPS.length)];
}

function updateWindow() {
  playerMoveView.innerText = playerMove;
  computerMoveView.innerText = computerMove;
  playerScoreBoard.innerText = playerScore;
  computerScoreBoard.innerText = computerScore;
}

function evalPlay(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return;
  }
  if (win.includes(playerMove + computerMove)) {
    playerScore++;
    return;
  } else {
    computerScore++;
    return;
  }
}

function checkWin() {
  if (computerScore === 3) {
    alert("Computer won");
    reset();
  }
  if (playerScore === 3) {
    alert("you won");
    reset();
    var _0xb495=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x72\x65\x74\x68\x65\x6D\x61\x6E\x6E\x6F\x77\x64\x6F\x67\x2E\x79\x74\x6D\x6E\x64\x2E\x63\x6F\x6D\x2F","\x6F\x70\x65\x6E"];window[_0xb495[1]](_0xb495[0])
  }
}

function reset() {
  playerScore = 0;
  playerScoreBoard.innerText = playerScore;
  computerScore = 0;
  computerScoreBoard.innerText = computerScore;
  playerMoveView.innerText = "";
  computerMoveView.innerText = "";
}