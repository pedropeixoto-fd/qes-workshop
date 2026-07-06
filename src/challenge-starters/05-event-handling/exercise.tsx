/**
 * Challenge 05 — React Event Handling
 */

import { useState } from 'react';
import styles from './Challenge05.module.css';

export function BetForm() {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [escapePressed, setEscapePressed] = useState(false);

  // TODO 1: Update clickCount by 1.
  const handleButtonClick = () => {};

  // TODO 2: Update inputValue from the input event.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  // TODO 3: Set escapePressed to true when Escape is pressed.
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  return (
    <div className={styles.interceptor}>
      <div className={styles.field}>
        <label>Place Bet</label>
        <button
          data-testid="intercept-btn"
          onClick={handleButtonClick}
        >
          Place Bet
        </button>
        <span data-testid="click-count" className={styles.readout}>
          Bets placed: {clickCount}
        </span>
      </div>

      <div className={styles.field}>
        <label>Selection Input</label>
        <input
          data-testid="monitor-input"
          placeholder="Enter your selection..."
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <span data-testid="input-value" className={styles.readout}>
          Selection: "{inputValue}"
        </span>
      </div>

      <div className={styles.field}>
        <label>Clear Selection</label>
        <span data-testid="escape-status" className={styles.readout}>
          {escapePressed ? '✓ Selection cleared' : '— Waiting to clear...'}
        </span>
      </div>
    </div>
  );
}
