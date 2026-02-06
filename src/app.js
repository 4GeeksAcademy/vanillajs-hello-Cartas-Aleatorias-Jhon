const suits = ["♦", "♥", "♠", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const topSuit = document.getElementById("top-suit");
const value = document.getElementById("value");
const bottomSuit = document.getElementById("bottom-suit");
const timerText = document.getElementById("timer");
const btn = document.getElementById("newCardBtn");

let timeLeft = 10;
let interval;

function generateCard() {
  // Elegir icono random
  let suit = suits[Math.floor(Math.random() * suits.length)];
  let val = values[Math.floor(Math.random() * values.length)];

  // Aplicar valores
  topSuit.innerHTML = suit;
  value.innerHTML = val;
  bottomSuit.innerHTML = suit;

  // Color rojo para corazones y diamantes
  if (suit === "♦" || suit === "♥") {
    topSuit.style.color = "red";
    value.style.color = "red";
    bottomSuit.style.color = "red";
  } else {
    topSuit.style.color = "black";
    value.style.color = "black";
    bottomSuit.style.color = "black";
  }

  // Reiniciar el temporizador
  resetTimer();
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 10;
  timerText.innerHTML = timeLeft;

  interval = setInterval(() => {
    timeLeft--;
    timerText.innerHTML = timeLeft;

    if (timeLeft <= 0) {
      generateCard();
    }
  }, 1000);
}

btn.addEventListener("click", generateCard);

// Ejecutar primera carta
generateCard();
