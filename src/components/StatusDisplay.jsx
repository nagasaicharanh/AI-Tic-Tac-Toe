import React from 'react';
import '../styles/StatusDisplay.css';

const StatusDisplay = ({ currentPlayer, gameStatus, winner, gameMode }) => {
  const getStatusMessage = () => {
    if (gameStatus === 'won') {
      if (gameMode === 'single' && winner === 'O') {
        return '🤖 AI wins!';
      }
      return `🎉 Player ${winner} wins!`;
    }
    if (gameStatus === 'draw') {
      return "It's a draw!";
    }
    if (gameMode === 'single') {
      return currentPlayer === 'X' ? 'Your turn (X)' : 'AI is thinking...';
    }
    return `Player ${currentPlayer}'s turn`;
  };

  return (
    <div className="status-display">
      <p>{getStatusMessage()}</p>
    </div>
  );
};

export default StatusDisplay;
