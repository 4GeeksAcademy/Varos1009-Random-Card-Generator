/* eslint-disable */
import "bootstrap";
import "./style.css";

const cardNumber = [
  "A",
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
const cardSymbols = ["&clubs;", "&diams;", "&hearts;", "&spades;"];

const randomGenerate = array => {
  const randomindex = Math.floor(Math.random() * array.length);
  return randomindex;
};

const randomCard = () => {
  const randomCardNumber = cardNumber[randomGenerate(cardNumber)];
  const randomCardSymbol1 = cardSymbols[randomGenerate(cardSymbols)];
  const randomCardSymbol2 = randomCardSymbol1;

  //let colorCard = document.getElementsByClassName("topSym");
  //function changeColor(symbol) {
  //  symbol.style.color = "red";
  // return symbol;
  //}

  const elementNumber = document.getElementById("cardNum");
  elementNumber.innerHTML = randomCardNumber;
  const elementSymbol1 = document.getElementById("cardSym1");
  elementSymbol1.innerHTML = randomCardSymbol1;
  const elementSymbol2 = document.getElementById("cardSym2");
  elementSymbol2.innerHTML = randomCardSymbol2;
  if (randomCardSymbol1 === "&hearts;" || randomCardSymbol1 === "&diams;") {
    elementSymbol1.style.color = "red";
  } else {
    elementSymbol1.style.color = "black";
  }
  if (randomCardSymbol2 === "&hearts;" || randomCardSymbol2 === "&diams;") {
    elementSymbol2.style.color = "red";
  } else {
    elementSymbol2.style.color = "black";
  }
};

let button = document.getElementById("newButton");
button.addEventListener("click", () => {
  randomCard();
});
