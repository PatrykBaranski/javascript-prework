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
