# Project Memory: AI Tic Tac Toe

This file stores key technical decisions, architectural patterns, and project-specific knowledge for the AI Tic Tac Toe project.

## Project Overview
- **Stack:** React 19, Vite, Vanilla CSS.
- **Theme:** THM Branding (Green: #84BD00, Dark Gray: #4A5C66).
- **Core Logic:** Separated into `src/utils/gameLogic.js` and `src/utils/ai.js` (Minimax algorithm).
- **UI Components:** Modular components in `src/components/` with corresponding styles in `src/styles/`.

## Key Architectural Decisions
- **Theming:** Centralized THM colors using CSS variables in `index.css`.
- **Separation of Concerns:** Game state is managed in `Game.jsx`, while pure logic resides in `utils/`.
- **Styling:** Preference for Vanilla CSS over CSS frameworks like Tailwind.

## Development Workflows
- **Start Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`

## Future Considerations
- AI is currently "unbeatable" using Minimax; consider adding difficulty levels (e.g., Easy, Medium, Hard).
