# AI Tic Tac Toe

A modern, interactive Tic Tac Toe game built with React and Vite. Play against an unbeatable AI opponent or challenge a friend in two-player mode.

## Features

- 🤖 **Single-Player Mode** - Play against an AI opponent powered by the minimax algorithm (impossible to beat!)
- 👥 **Multiplayer Mode** - Two players can play on the same device
- 🎨 **Beautiful UI** - Gradient design with smooth animations and responsive layout
- ⚡ **Fast Performance** - Built with React + Vite for instant HMR and lightning-fast builds
- 📱 **Mobile Friendly** - Fully responsive design works on all devices

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nagasaicharanh/AI-Tic-Tac-Toe.git
cd AI-Tic-Tac-Toe

# Install dependencies
npm install

# Start the development server
npm run dev
```

The game will be available at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

## How to Play

1. **Select Game Mode** - Choose between playing vs AI or against another player
2. **Click Cells** - Click on any empty cell to place your mark (X)
3. **Win or Draw** - Get three in a row horizontally, vertically, or diagonally to win
4. **New Game** - Click "New Game" to reset and play again
5. **Main Menu** - Click "Main Menu" to switch game modes

## Game Logic

- **X always plays first** (human player in single-player mode)
- **Minimax Algorithm** - The AI uses minimax to evaluate all possible moves and choose the optimal one
- **Win Detection** - Automatically detects winning combinations and draws
- **Responsive Updates** - Real-time game status display

## Technologies

- **React** - UI library for building interactive components
- **Vite** - Fast build tool and dev server
- **JavaScript ES6+** - Modern JavaScript for game logic
- **CSS3** - Beautiful styling with gradients and animations

## Project Structure

```
src/
├── components/       # React components
│   ├── Game.jsx      # Main game controller
│   ├── GameBoard.jsx # Game board grid
│   ├── ModeSelector.jsx # Mode selection UI
│   └── StatusDisplay.jsx # Game status display
├── utils/            # Utility functions
│   ├── gameLogic.js  # Core game logic
│   └── ai.js         # Minimax AI algorithm
├── styles/           # Component styles
│   ├── Game.css
│   ├── GameBoard.css
│   ├── ModeSelector.css
│   └── StatusDisplay.css
└── App.jsx           # Main app component
```

## License

This project is open source and available under the MIT License.

## Author

Created by Naga
