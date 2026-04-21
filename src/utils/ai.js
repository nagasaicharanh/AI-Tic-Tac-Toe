// AI opponent using minimax algorithm
import { checkWinner, isBoardFull, getAvailableMoves } from './gameLogic';

// Minimax algorithm - evaluates the board position
const minimax = (board, depth, isMaximizing) => {
  const winner = checkWinner(board);
  
  // Terminal states
  if (winner === 'O') return 10 - depth; // AI wins
  if (winner === 'X') return depth - 10; // Human wins
  if (isBoardFull(board)) return 0; // Draw
  
  const availableMoves = getAvailableMoves(board);
  
  if (isMaximizing) {
    // Maximizing player (AI - O)
    let bestScore = -Infinity;
    for (let move of availableMoves) {
      const newBoard = [...board];
      newBoard[move] = 'O';
      const score = minimax(newBoard, depth + 1, false);
      bestScore = Math.max(score, bestScore);
    }
    return bestScore;
  } else {
    // Minimizing player (Human - X)
    let bestScore = Infinity;
    for (let move of availableMoves) {
      const newBoard = [...board];
      newBoard[move] = 'X';
      const score = minimax(newBoard, depth + 1, true);
      bestScore = Math.min(score, bestScore);
    }
    return bestScore;
  }
};

// Get the best move for the AI
export const getAIMove = (board) => {
  const availableMoves = getAvailableMoves(board);
  
  if (availableMoves.length === 0) {
    return null;
  }
  
  let bestScore = -Infinity;
  let bestMove = availableMoves[0];
  
  for (let move of availableMoves) {
    const newBoard = [...board];
    newBoard[move] = 'O';
    const score = minimax(newBoard, 0, false);
    
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }
  
  return bestMove;
};
