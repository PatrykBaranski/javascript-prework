const randomNumber = Math.floor(Math.random() * 3 + 1);
const playerInput = prompt(
  "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
);
const computerMove = changeNumberToMove(randomNumber);
const playerMove = changeNumberToMove(+playerInput);
printMessage(`Mój ruch to: ${computerMove}`);
printMessage(`Twoj ruch to: ${playerMove}`);
displayResults(computerMove, playerMove);
