"use strict";
const img = document.querySelector(".img1");
// console.log(img);
const randomNumber1 = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber1);

if (randomNumber1 === 1) {
  img.src = "http://127.0.0.1:5500/images/dice1.png";
} else if (randomNumber1 === 2) {
  img.src = "http://127.0.0.1:5500/images/dice2.png";
} else if (randomNumber1 === 3) {
  img.src = "http://127.0.0.1:5500/images/dice3.png";
} else if (randomNumber1 === 4) {
  img.src = "http://127.0.0.1:5500/images/dice4.png";
} else if (randomNumber1 === 5) {
  img.src = "http://127.0.0.1:5500/images/dice5.png";
} else {
  img.src = "http://127.0.0.1:5500/images/dice6.png";
}

const img2 = document.querySelector(".img2");
// console.log(img2);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber2);

if (randomNumber2 === 1) {
  img2.src = "http://127.0.0.1:5500/images/dice1.png";
} else if (randomNumber2 === 2) {
  img2.src = "http://127.0.0.1:5500/images/dice2.png";
} else if (randomNumber2 === 3) {
  img2.src = "http://127.0.0.1:5500/images/dice3.png";
} else if (randomNumber2 === 4) {
  img2.src = "http://127.0.0.1:5500/images/dice4.png";
} else if (randomNumber2 === 5) {
  img2.src = "http://127.0.0.1:5500/images/dice5.png";
} else {
  img2.src = "http://127.0.0.1:5500/images/dice6.png";
}

const msg = document.querySelector("h1");
// console.log(msg);

if (randomNumber1 > randomNumber2) {
  msg.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  msg.textContent = "Player 2 Wins! 🚩";
} else {
  msg.textContent = "Draw!";
}
