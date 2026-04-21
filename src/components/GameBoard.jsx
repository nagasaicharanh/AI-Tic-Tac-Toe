import React from 'react';
import '../styles/GameBoard.css';

const GameBoard = ({ board, onCellClick, gameOver, winner }) => {
  return (
    <div className="game-board">
      {board.map((cell, index) => (
        <button
          key={index}
          className={`cell ${cell ? `player-${cell}` : ''} ${gameOver ? 'disabled' : ''}`}
          onClick={() => onCellClick(index)}
          disabled={cell !== null || gameOver}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
