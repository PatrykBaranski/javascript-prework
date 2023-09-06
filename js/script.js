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
  const playGameCallback = (number) => {
    return () => {
      playGame(number);
    };
  };

  rockBtn.addEventListener("click", playGameCallback(1));
  paperBtn.addEventListener("click", playGameCallback(2));
  scissorsBtn.addEventListener("click", playGameCallback(3));
}
