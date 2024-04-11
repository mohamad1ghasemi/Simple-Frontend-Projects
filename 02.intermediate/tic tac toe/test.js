class TicTacToe {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.players = ['X', 'O'];
    this.currentPlayerIndex = 0;
  }

  makeMove(row, col) {
    if (this.board[row][col] === '') {
      this.board[row][col] = this.players[this.currentPlayerIndex];
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
      return true;
    }
    return false;
  }

  isGameOver() {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] !== '' &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][0] === this.board[i][2]) {
        return true;
      }
      if (this.board[0][i] !== '' &&
        this.board[0][i] === this.board[1][i] &&
        this.board[0][i] === this.board[2][i]) {
        return true;
      }
    }
    if (this.board[0][0] !== '' &&
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2]) {
      return true;
    }
    if (this.board[0][2] !== '' &&
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][0]) {
      return true;
    }

    // Check for a draw
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }

  evaluate() {
    // Evaluation function for Minimax
    // You can customize this function based on your strategy
    if (this.isGameOver() && !this.isWinner()) {
      return 0; // Draw
    } else if (this.isWinner()) {
      return (this.currentPlayerIndex === 1) ? -1 : 1; // Player X wins: 1, Player O wins: -1
    }
  }

  isWinner() {
    // Check if the current player wins
    // Similar to the conditions in isGameOver()
    // This function is used in evaluate() to determine the score
  }

  minimax(depth, maximizingPlayer) {
    if (this.isGameOver() || depth === 0) {
      return this.evaluate();
    }

    if (maximizingPlayer) {
      let maxEval = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.board[i][j] === '') {
            this.board[i][j] = this.players[0];
            maxEval = Math.max(maxEval, this.minimax(depth - 1, false));
            this.board[i][j] = '';
          }
        }
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.board[i][j] === '') {
            this.board[i][j] = this.players[1];
            minEval = Math.min(minEval, this.minimax(depth - 1, true));
            this.board[i][j] = '';
          }
        }
      }
      return minEval;
    }
  }

  findBestMove() {
    let bestEval = -Infinity;
    let bestMove = { row: -1, col: -1 };

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === '') {
          this.board[i][j] = this.players[0];
          let eval = this.minimax(3, false);
          this.board[i][j] = '';
          if (eval > bestEval) {
            bestEval = eval;
            bestMove.row = i;
            bestMove.col = j;
          }
        }
      }
    }
    return bestMove;
  }
}

// Example usage:
let game = new TicTacToe();
let bestMove = game.findBestMove();
console.log("Best Move:", bestMove.row, bestMove.col);
