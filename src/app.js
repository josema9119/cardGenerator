/* eslint-disable */
import { eventListeners } from "@popperjs/core";
import "bootstrap";
import "./style.css";

const pokerSuits = ["&#9829;", "&#9830;", "&spades;", "&#9827;"];
const pokerNumbers = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const pokerCard = document.querySelector("#poker-card");
pokerCard.style.height = "600px";
pokerCard.style.width = "400px";
pokerCard.style.borderRadius = "20px";

const cardNumber = document.querySelector(".card-number");
cardNumber.style.fontSize = "50px";

const cardSuits = document.querySelectorAll(".suit");

const getRandomNumber = () => {
  cardNumber.innerHTML =
    pokerNumbers[Math.floor(Math.random() * pokerNumbers.length)];
};

const getRandomSuit = () => {
  const cardSuit = pokerSuits[Math.floor(Math.random() * pokerSuits.length)];
  for (let suit = 0; suit < cardSuits.length; suit++) {
    cardSuits[suit].style.fontSize = "50px";
    cardSuits[suit].innerHTML = cardSuit;
  }
};

const shuffleButton = document.querySelector(".shuffle");
shuffleButton.addEventListener("click", () => {
  getRandomNumber();
  getRandomSuit();
});

getRandomNumber();
getRandomSuit();

window.onload = () => {};
