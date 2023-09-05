{
  const rockBtn = document.getElementById("play-rock");
  const paperBtn = document.getElementById("play-paper");
  const scissorsBtn = document.getElementById("play-scissors");

  const playGame = (playerInput) => {
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = changeNumberToMove(randomNumber);
    const playerMove = changeNumberToMove(+playerInput);
    printMessage(`Mój ruch to: ${computerMove}`);
    printMessage(`Twoj ruch to: ${playerMove}`);
    displayResults(computerMove, playerMove);
  };
  rockBtn.addEventListener("click", () => {
    playGame(1);
  });
  paperBtn.addEventListener("click", () => {
    playGame(2);
  });
  scissorsBtn.addEventListener("click", () => {
    playGame(3);
  });
}
