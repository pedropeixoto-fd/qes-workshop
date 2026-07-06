/**
 * Challenge 04 — React State & Props
 */

import styles from './Challenge04.module.css';

// TODO 1: Define the props interface.

// TODO 2-5: Fix the component.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function OddsCounter(props: any) {
  // TODO 3: Add useState, initialized with props.initialCount.
  const count = 0;

  return (
    <div className={styles.counter}>
      <p data-testid="label">LABEL MISSING</p>

      <p data-testid="count" className={styles.countDisplay}>{count}</p>

      <div className={styles.buttons}>
        <button data-testid="decrement" onClick={() => {}}>
          Cancel Bet
        </button>
        <button data-testid="increment" onClick={() => {}}>
          Place Bet
        </button>
      </div>
    </div>
  );
}
