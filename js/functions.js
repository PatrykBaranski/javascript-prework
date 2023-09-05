const printMessage = (msg) => {
  const div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
};

const clearMessages = () => {
  document.getElementById("messages").innerHTML = "";
};
const changeNumberToMove = (number) => {
  let move = "nieznany ruch";
  if (number === 1) {
    move = "kamien";
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
  const output = {
    kamien: { kamien: draw, nozyce: playerWin, papier: computerWin },
    papier: { papier: draw, kamien: computerWin, nozyce: playerWin },
    nozyce: { nozyce: draw, kamien: playerWin, papier: computerWin },
  };
  const winner = output[computerMove][playerMove];
  printMessage(winner);
};
