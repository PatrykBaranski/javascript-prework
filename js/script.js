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
displayResults(computerMove, playerMove);
