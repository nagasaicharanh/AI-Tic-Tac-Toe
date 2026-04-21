import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import ModeSelector from './ModeSelector';
import StatusDisplay from './StatusDisplay';
import { makeMove, getGameStatus, isValidMove } from '../utils/gameLogic';
import { getAIMove } from '../utils/ai';
import '../styles/Game.css';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMode, setGameMode] = useState(null); // 'single' or 'multi'
  const [gameStatus, setGameStatus] = useState('playing');
  const [winner, setWinner] = useState(null);

  // Handle mode selection
  const handleModeSelect = (mode) => {
    setGameMode(mode);
    resetGame();
  };

  // Handle cell click
  const handleCellClick = (index) => {
    if (!isValidMove(board, index) || gameStatus !== 'playing') {
      return;
    }

    // Player makes a move
    const newBoard = makeMove(board, index, currentPlayer);
    setBoard(newBoard);

    // Check if player won
    const status = getGameStatus(newBoard);
    if (status.status !== 'playing') {
      setGameStatus(status.status);
      setWinner(status.winner);
      return;
    }

    // Switch player for multiplayer or prepare AI move
    if (gameMode === 'multi') {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    } else {
      // AI turn in single player mode
      setCurrentPlayer('O');
    }
  };

  // AI move effect
  useEffect(() => {
    if (gameMode === 'single' && currentPlayer === 'O' && gameStatus === 'playing') {
      const timer = setTimeout(() => {
        const aiMove = getAIMove(board);
        if (aiMove !== null) {
          const newBoard = makeMove(board, aiMove, 'O');
          setBoard(newBoard);

          const status = getGameStatus(newBoard);
          if (status.status !== 'playing') {
            setGameStatus(status.status);
            setWinner(status.winner);
          } else {
            setCurrentPlayer('X');
          }
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentPlayer, gameMode, board, gameStatus]);

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameStatus('playing');
    setWinner(null);
  };

  // Main menu
  if (!gameMode) {
    return (
      <div className="game-container">
        <h1>Tic Tac Toe</h1>
        <ModeSelector onModeSelect={handleModeSelect} />
      </div>
    );
  }

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      <StatusDisplay
        currentPlayer={currentPlayer}
        gameStatus={gameStatus}
        winner={winner}
        gameMode={gameMode}
      />
      <GameBoard
        board={board}
        onCellClick={handleCellClick}
        gameOver={gameStatus !== 'playing'}
        winner={winner}
      />
      <div className="button-group">
        <button className="reset-button" onClick={resetGame}>
          New Game
        </button>
        <button className="menu-button" onClick={() => setGameMode(null)}>
          Main Menu
        </button>
      </div>
    </div>
  );
};

export default Game;
