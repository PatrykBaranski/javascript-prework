function printMessage(msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}
const changeNumberToMove = (number) => {
  let move = "nieznany ruch";
  if (number === 1) {
    move = "kamień";
  } else if (number === 2) {
    move = "papier";
  } else if (number === 3) {
    move = "nozyce";
  }
  return move;
};
const displayResults = (computerMove, playerMove) => {
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
};
