// Define Attributes
board = ["", "", "", "", "", "", "", "", ""];
gamePiece = ["X", "O"];
userPiece = [""]
ComputerPiece = [""];
// Define all function

function gameStart() {
  gameChoosePiece();
}
function restartGame() {
  location.reload();
}
function closeTab() {
  window.close();
}
function gameChoosePiece() {
  while (userPiece !== "X" && userPiece !== "O") {
    userPiece = prompt("Enter your piece (choose between X or O):");
    userPiece = userPiece.toUpperCase();
    if (userPiece === null || (userPiece !== "X" && userPiece !== "O")) {
      alert("Please enter a valid choice (X or O).");
    }
  }
  if (userPiece == "X") {
    computerPiece = "O";
  }
  else {
    computerPiece = "X";
  }
}
function gameEndedChecker() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {

      if (board[a] === userPiece) {
        alert("You win's :)");
      }
      else { alert("You're a loser!!!"); }
      return true;
    }
  }

  if (board.every(cell => cell !== "")) {

    alert("It's a tie!");
    return true;
  }

  return false;
}
function addItemToTables(element) {
  let index = Array.from(element.parentNode.children).indexOf(element);
  if (board[index] === "") {
    element.textContent = userPiece;
    board[index] = userPiece;
    if (!gameEndedChecker()) {
      setTimeout(computerMove, 1000);
    }
  }
}
function computerMove() {
  var emptyCells = [];
  for (var i = 0; i < board.length; i++) {
    if (board[i] === "") {
      emptyCells.push(i);
    }
  }
  let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  board[randomIndex] = computerPiece;
  let gridItems = document.querySelectorAll('.gridItem');
  gridItems[randomIndex].textContent = computerPiece;
  gameEndedChecker();

}