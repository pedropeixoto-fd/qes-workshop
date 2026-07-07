/**
 * Challenge 04 — React State & Props
 */

import { useState } from 'react';
import styles from './Challenge04.module.css';

export interface OddsCounterProps {
  initialCount: number;
  label: string;
}

// TODO Fix the component. display the label and count.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function OddsCounter(props: OddsCounterProps) {
  // TODO Add useState, initialized with props.initialCount.
  const count = 0

  const handleDecrement = () => {
  }

  const handleIncrement = () => {
  }

  return (
    <div className={styles.counter}>
      <p data-testid="label">{}</p>

      <p data-testid="count" className={styles.countDisplay}>{count}</p>

      <div className={styles.buttons}>
        <button data-testid="decrement" onClick={handleDecrement}>
          Cancel Bet
        </button>
        <button data-testid="increment" onClick={handleIncrement}>
          Place Bet
        </button>
      </div>
    </div>
  );
}
