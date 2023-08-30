const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("Wylosowana liczba to: " + randomNumber);
const computerMove = changeNumberToMove(randomNumber);
printMessage(`Mój ruch to: ${computerMove}`);
const playerInput = prompt(
  "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
);
const playerMove = changeNumberToMove(+playerInput);
console.log(`Gracz wybral liczbe: ${playerInput}`);
printMessage(`Twoj ruch to: ${playerMove}`);
const computerWin = "Ja wygrałem";
const playerWin = "Ty wygrłeś";
const draw = "remis";
let winner = "nie mozna wybrac zwyciezcy";

if (playerMove === "kamień" && computerMove === "papier") {
  winner = computerWin;
} else if (playerMove === "papier" && computerMove === "papier") {
  winner = draw;
} else if (playerMove === "nozyce" && computerMove === "papier") {
  winner = playerWin;
} else if (playerMove === "kamień" && computerMove === "kamień") {
  winner = draw;
} else if (playerMove === "papier" && computerMove === "kamień") {
  winner = playerWin;
} else if (playerMove === "nozyce" && computerMove === "kamień") {
  winner = computerWin;
} else if (playerMove === "kamień" && computerMove === "nozyce") {
  winner = playerWin;
} else if (playerMove === "papier" && computerMove === "nozyce") {
  winner = computerWin;
} else if (playerMove === "nozyce" && computerMove === "nozyce") {
  winner = draw;
}
printMessage(winner);
