import React from 'react';
import '../styles/ModeSelector.css';

const ModeSelector = ({ onModeSelect, disabled }) => {
  return (
    <div className="mode-selector">
      <h2>Select Game Mode</h2>
      <div className="button-group">
        <button
          className="mode-button"
          onClick={() => onModeSelect('single')}
          disabled={disabled}
        >
          Play vs AI
        </button>
        <button
          className="mode-button"
          onClick={() => onModeSelect('multi')}
          disabled={disabled}
        >
          Two Players
        </button>
      </div>
    </div>
  );
};

export default ModeSelector;
