// Game logic utilities for tic tac toe

// Check if there's a winner
export const checkWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

// Check if the board is full (draw)
export const isBoardFull = (board) => {
  return board.every(cell => cell !== null);
};

// Check if the game is over (winner or full board)
export const isGameOver = (board) => {
  return checkWinner(board) !== null || isBoardFull(board);
};

// Get available moves
export const getAvailableMoves = (board) => {
  return board
    .map((cell, index) => (cell === null ? index : null))
    .filter(index => index !== null);
};

// Validate a move
export const isValidMove = (board, index) => {
  return board[index] === null;
};

// Make a move on the board (returns new board)
export const makeMove = (board, index, player) => {
  if (!isValidMove(board, index)) {
    return board;
  }
  const newBoard = [...board];
  newBoard[index] = player;
  return newBoard;
};

// Get game status
export const getGameStatus = (board) => {
  const winner = checkWinner(board);
  if (winner) {
    return { status: 'won', winner };
  }
  if (isBoardFull(board)) {
    return { status: 'draw' };
  }
  return { status: 'playing' };
};
